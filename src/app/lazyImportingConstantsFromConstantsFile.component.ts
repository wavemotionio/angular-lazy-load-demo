import { Component, OnInit } from "@angular/core";
import { newStrings } from "./newstrings.constant";

@Component({
  template: `
    <p>Lazy component with imported constants from newstrings.constant.ts loaded: {{stringToDisplay}}</p>
  `
})
export class LazyImportingConstantsFromConstantsFileComponent implements OnInit{
  stringToDisplay: string;

  constructor() {}

  ngOnInit() {
    this.stringToDisplay = newStrings.string1;
  }
}
