import {
  Component,
  ViewContainerRef,
  ComponentFactoryResolver
} from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <div>
      
      <div><button (click)="getLazySimpleComponent()">lazy load simple component</button></div>
      <div><button (click)="getLazyWithConstantsComponent()">lazy load component with constants</button></div>
      
      <div><button (click)="getLazyImportingConstantsFromSiblingComponent()">lazy load component that imports constants from LazyWithConstantsComponent</button></div>
      <div><button (click)="getLazyImportingConstantsFromConstantsFileComponent()">lazy load component that imports constants from newstrings.constant.ts</button></div>
    
    </div>
  `
})
export class AppComponent {
  title = "lazy-comp";

  constructor(
    private viewContainerRef: ViewContainerRef,
    private cfr: ComponentFactoryResolver
  ) {}

  async getLazySimpleComponent() {
    this.viewContainerRef.clear();
    const { LazySimpleComponent } = await import("./lazySimple.component");
    this.viewContainerRef.createComponent(
      this.cfr.resolveComponentFactory(LazySimpleComponent)
    );
  }

  async getLazyWithConstantsComponent() {
    this.viewContainerRef.clear();
    const { LazyWithConstantsComponent } = await import("./lazyWithConstants.component");
    this.viewContainerRef.createComponent(
      this.cfr.resolveComponentFactory(LazyWithConstantsComponent)
    );
  }

  async getLazyImportingConstantsFromSiblingComponent() {
    this.viewContainerRef.clear();
    const { LazyImportingConstantsFromSiblingComponent } = await import("./lazyImportingConstantsFromSibling.component");
    this.viewContainerRef.createComponent(
      this.cfr.resolveComponentFactory(LazyImportingConstantsFromSiblingComponent)
    );
  }

  async getLazyImportingConstantsFromConstantsFileComponent() {
    this.viewContainerRef.clear();
    const { LazyImportingConstantsFromConstantsFileComponent } = await import("./lazyImportingConstantsFromConstantsFile.component");
    this.viewContainerRef.createComponent(
      this.cfr.resolveComponentFactory(LazyImportingConstantsFromConstantsFileComponent)
    );
  }
}
