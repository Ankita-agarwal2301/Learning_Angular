import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {
currentColor:string;
  constructor(private element: ElementRef) {
    // refernce to my element , what i want to do , how i want to control it by event listening

    element.nativeElement.style.backgroundColor = 'white';
    element.nativeElement.style.color = 'navy';
  }
  @HostListener('mouseover')
  mouseHover() {
    this.currentColor = this.element.nativeElement.style.backgroundColor;
    this.element.nativeElement.style.backgroundColor = 'lightyellow';
  }
  @HostListener('mouseout')
  mouseHoverExit() {
    this.element.nativeElement.style.backgroundColor =  this.currentColor;
  }
}
