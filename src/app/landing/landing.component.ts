import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { examples, IExample } from '../examples'
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  public examples : IExample[] =  examples;

  currentExample : IExample;
  constructor() {
    this.currentExample = {
      id:0,
      name:'',
      sourceCode:`#include "iostream"
using namespace std;

int main(){
  return 0;
}
      `,
      link:''
    }
   }

  ngOnInit(): void {
  }

  changeExample(example : MatSelectChange){
    this.currentExample = examples[example.value - 1];
  }

}
