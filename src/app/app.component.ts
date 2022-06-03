import {
  Component,
  ViewContainerRef,
  ComponentFactoryResolver
} from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <div>
      <div>Hello World! This is the {{ title }} app.</div>
      <button (click)="getLazy1()">lazy 1</button>
      <button (click)="getLazy2()">lazy 2</button>
      <button (click)="getLazy3()">lazy 3</button>
      <button (click)="getLazy4()">lazy 4</button>
    </div>
  `
})
export class AppComponent {
  title = "lazy-comp";

  constructor(
    private viewContainerRef: ViewContainerRef,
    private cfr: ComponentFactoryResolver
  ) {}

  async getLazy1() {
    this.viewContainerRef.clear();
    const { Lazy1Component } = await import("./lazy1.component");
    this.viewContainerRef.createComponent(
      this.cfr.resolveComponentFactory(Lazy1Component)
    );
  }

  async getLazy2() {
    this.viewContainerRef.clear();
    const { Lazy2Component } = await import("./lazy2.component");
    this.viewContainerRef.createComponent(
      this.cfr.resolveComponentFactory(Lazy2Component)
    );
  }

  async getLazy3() {
    this.viewContainerRef.clear();
    const { Lazy3Component } = await import("./lazy3.component");
    this.viewContainerRef.createComponent(
      this.cfr.resolveComponentFactory(Lazy3Component)
    );
  }

  async getLazy4() {
    this.viewContainerRef.clear();
    const { Lazy4Component } = await import("./lazy4.component");
    this.viewContainerRef.createComponent(
      this.cfr.resolveComponentFactory(Lazy4Component)
    );
  }
}
