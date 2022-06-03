import { Component, OnInit } from "@angular/core";
import { myStrings } from "./lazy3.component";

@Component({
  template: `
    <p>lazy4 component: {{stringToDisplay}}</p>
  `
})
export class Lazy4Component implements OnInit{
  stringToDisplay: string;

  constructor() {}

  ngOnInit() {
    this.stringToDisplay = myStrings.string1;
  }
}
