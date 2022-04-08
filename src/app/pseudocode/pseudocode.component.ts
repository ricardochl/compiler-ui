import { CompileService } from './../core/services/compile.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pseudocode',
  templateUrl: './pseudocode.component.html',
  styleUrls: ['./pseudocode.component.scss'],
})
export class PseudocodeComponent implements OnInit {

  constructor(public compileService : CompileService) { }

  ngOnInit(): void {

  }

}
