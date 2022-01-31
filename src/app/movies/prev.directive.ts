import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPrev]'
})
export class PrevDirective {

  constructor(private elementRef: ElementRef) { }

  @HostListener('click')
  prevFunc() {
    var element = this.elementRef.nativeElement.parentElement.parentElement.children[0];
    var items = element.getElementsByClassName("item");
    element.prepend(items[items.length - 1]);
  }

}
