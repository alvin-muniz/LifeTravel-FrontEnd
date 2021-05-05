import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appPopoutMenu]'
})
export class PopoutMenuDirective {

  constructor( private el: ElementRef) {
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.highlightColor(null);
  }

  @HostListener('mouseenter') onMouseEnter(): void {
    this.highlightColor('yellow');
  }

  private highlightColor(color: string): void {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
