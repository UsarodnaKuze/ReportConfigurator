import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { baseData, baseUpdateData } from 'app/services/data.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';
  private baseData: string;
  private baseUpdateData = baseUpdateData;
  private data: string;
  xml: Document;
  constructor(private _sanitizer: DomSanitizer) {
  }
  atob(data) {
    return this._sanitizer.bypassSecurityTrustHtml(atob(data));
  }
  getConfigPositions(xsltSource: string): number[] {
    const openingTag = '<samuReportConfig>';
    const closingTag = '</samuReportConfig>';
    const startIndex = xsltSource.indexOf(openingTag);
    const endIndex = xsltSource.indexOf(closingTag) + closingTag.length;
    return [startIndex, endIndex];
  }
  getConfigFromXslt(xsltSource: string): string {
    const pos = this.getConfigPositions(xsltSource);
    return xsltSource.substring(pos[0], pos[1]);
  }
  writeConfigToXslt(xsltSource: string, xsltTarget: Document): string {
    const ser = new XMLSerializer();
    const toBeReplaced = this.getConfigFromXslt(xsltSource);
    const toBeReplacedWith = ser.serializeToString(xsltTarget);
    return xsltSource.replace(toBeReplaced, toBeReplacedWith);
  }
  xmlToDOM(xmlSource): Document {
    const xmlParser = new DOMParser();
    const xml = xmlParser.parseFromString(xmlSource , 'application/xml');
    return xml;
  }
  domToXml(doc: Document) {
    const ser = new XMLSerializer();
    return ser.serializeToString(doc);
  }
  updateReport(newReport: string) {
   const newReportConfig: string = this.getConfigFromXslt(newReport);
   const newReportConfigXml: Document = this.xmlToDOM(newReportConfig);
   const chd = (<HTMLElement>newReportConfigXml.firstChild).children;
   for (let i = 0; i < chd.length; i++) {
    if ((<HTMLElement>this.xml.firstChild).getElementsByTagName(chd[i].nodeName).length === 0) {
      this.xml.firstChild.appendChild(chd[i]);
    }
   };
   this.xsltTextValue(newReport);
   this.save();
  }
  xsltTextValue(updateString?: string): string {
    const text = (<HTMLTextAreaElement>(document.getElementById('xv')));
    if (updateString) {
      text.value = updateString;
    }
    return text.value;
  }
  changeImage() {

  }
  save() {
    const oldXslt = this.xsltTextValue();
    const newXslt = this.writeConfigToXslt(oldXslt, this.xml);
    console.log(oldXslt, newXslt);
    this.xsltTextValue(newXslt);
  }
  ngOnInit() {
    (<any>window).report = this;
    this.baseData = baseData;
    this.data = this.getConfigFromXslt(baseData);
    const xmlBase = this.data || '<config><username value="asd"></username></config>';
    this.xml = this.xmlToDOM(xmlBase);
  }
}
