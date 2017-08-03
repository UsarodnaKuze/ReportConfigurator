import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-value-editor',
  templateUrl: './value-editor.component.html',
  styleUrls: ['./value-editor.component.css']
})
export class ValueEditorComponent implements OnInit {
  @Input()
  value: Node;
  constructor() { }

  ngOnInit() {
  }

}
