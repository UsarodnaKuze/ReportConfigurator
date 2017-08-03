import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { baseData } from 'app/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';
  private data: string;
  xml: SamuXmlNode | Document;
  constructor() {
  }
  getConfigPositions(xsltSource: string): number[]{
    const openingTag = '<config>';
    const closingTag = '</config>';
    const startIndex = xsltSource.indexOf(openingTag);
    const endIndex = xsltSource.indexOf(closingTag) + closingTag.length;
    return [startIndex, endIndex];
  }
  getConfigFromXslt(xsltSource: string): string {
    const pos = this.getConfigPositions(xsltSource);
    return xsltSource.substring(pos[0], pos[1]);
  }
  writeConfigToXslt(xsltSource: string, xsltTarget: SamuXmlNode | Document): string {
    const ser = new XMLSerializer();
    const toBeReplaced = this.getConfigFromXslt(xsltSource);
    const toBeReplacedWith = ser.serializeToString(<Document>xsltTarget);
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
  save() {
    this.writeConfigToXslt(baseData, this.xml);
  }
  ngOnInit() {
    this.data = this.getConfigFromXslt(baseData);
    (<any>window).report = this;
    const xmlBase = this.data || '<config><username value="asd"></username></config>';
    // const xml = new SamuXmlNode(this.xmlToDOM(xmlBase));
    this.xml = this.xmlToDOM(xmlBase);
  }
}
 class SamuXmlNode {
  public name: string;
  public children: SamuXmlNode[] = [];
  constructor(public node: HTMLElement | Document | Element) {
    this.name = node.nodeName;
    for (let i = 0; i < node.children.length; i++) {
      this.children.push(new SamuXmlNode(node.children[i]));
    }
  }
}
