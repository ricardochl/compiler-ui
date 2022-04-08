import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import * as ace from "ace-builds";

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements AfterViewInit {

  @ViewChild("editor") private editor!: ElementRef<HTMLElement>;
  @Input() mode : string = 'c_cpp';
  @Input() readOnly : boolean = false;
  @Input('sourceCode')  set sourceCode(sourceCode : string){
    this._sourceCode = sourceCode;
    if(this.aceEditor){
      this.aceEditor.session.setValue("")
      this.aceEditor.session.setValue(sourceCode)
    }
  };

  @Output() onChange : EventEmitter<string> = new EventEmitter<string>();
  private aceEditor !: ace.Ace.Editor;
  private _sourceCode : string = '';
  constructor() {
  }

  ngAfterViewInit(): void {

    ace.config.set("fontSize", "14px");
    ace.config.set(
      "basePath",
      "https://unpkg.com/ace-builds@1.4.12/src-noconflict"
    );
    this.aceEditor = ace.edit(this.editor.nativeElement);
    this.aceEditor.session.setValue(this._sourceCode);
    this.aceEditor.setTheme("ace/theme/twilight");
    this.aceEditor.session.setMode(`ace/mode/${this.mode}`);
    this.aceEditor.setOptions({
      readOnly: this.readOnly,
      enableLinking: true
    })

    this.aceEditor.on("change", () => {
      this.onChange.emit(this.aceEditor.getValue())
    });
  }
}
