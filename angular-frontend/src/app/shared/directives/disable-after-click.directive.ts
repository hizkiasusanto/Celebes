import {Directive, ElementRef, HostBinding, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDisableAfterClick]'
})
export class DisableAfterClickDirective {
  @Input()
  @HostBinding('disabled')
  appDisableAfterClick(loaderState: boolean) {
    this.loaderState = loaderState
  }
  loaderState: boolean;

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit() {
    this.renderer.setAttribute(this.el.nativeElement,'disabled', this.loaderState ? 'disabled' : '')
  }

}
