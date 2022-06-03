import { Component } from "@angular/core";

export const myStrings = {
  string1: 'string one',
  string2: 'string two',
  string3: 'string three'
}

@Component({
  template: `
    <p>lazy3 component</p>
  `
})
export class Lazy3Component {}
