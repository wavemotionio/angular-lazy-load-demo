import { Component, OnInit } from "@angular/core";
import { myStrings } from "./lazyWithConstants.component";

@Component({
  template: `
    <p>Lazy component with imported constants from LazyWithConstantsComponent loaded: {{stringToDisplay}}</p>
  `
})
export class LazyImportingConstantsFromSiblingComponent implements OnInit {
  stringToDisplay: string;

  constructor() {}

  ngOnInit() {
    this.stringToDisplay = myStrings.string2;
  }
}
