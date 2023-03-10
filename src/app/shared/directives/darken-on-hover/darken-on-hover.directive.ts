import { Directive, ElementRef, HostListener, Input, Renderer2 } from "@angular/core";

@Directive({
  selector: '[appDarkenOnHover]'
})

export class DarkenOnHoverDirective {

  constructor(
    private element: ElementRef,
    private render: Renderer2
    ) {

  }

  @HostListener('mouseover')
  darkenOn() {
    this.render.setStyle(this.element.nativeElement, 'filter', 'brightness(70%)');
  }

  @HostListener('mouseleave')
  darkenOff() {
    this.render.setStyle(this.element.nativeElement, 'filter', 'brightness(100%)');
  }

}