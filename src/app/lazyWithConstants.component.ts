import { Component } from "@angular/core";

export const myStrings = {
  string1: 'string one',
  string2: 'string two',
  string3: 'string three'
}

@Component({
  template: `
    <p>Lazy component with constants loaded.</p>
  `
})
export class LazyWithConstantsComponent {}
