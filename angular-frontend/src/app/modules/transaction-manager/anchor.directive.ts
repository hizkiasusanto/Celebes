import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appAnchor]'
})
export class AnchorDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
