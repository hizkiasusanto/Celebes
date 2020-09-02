import {
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import {LoadingComponent} from "../components/loading/loading.component";

@Directive({
  selector: '[appLoading]'
})
export class LoadingDirective {
  loadingFactory: ComponentFactory<LoadingComponent>
  loadingComponent: ComponentRef<LoadingComponent>

  @Input()
  set appLoading(loading: boolean) {
    this.viewContainerRef.clear();

    if (loading)
    {
      // create and embed an instance of the loading component
      this.loadingComponent = this.viewContainerRef.createComponent(this.loadingFactory);
    }
    else
    {
      // embed the contents of the host template
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
    ) {
    this.loadingFactory = this.componentFactoryResolver.resolveComponentFactory(LoadingComponent);
  }

}
