import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[appMydrective]'
})
export class MydrectiveDirective {

  constructor(private re: Renderer2, private  el: ElementRef) {
    console.log(el)
    re.setStyle(el.nativeElement, 'color', 'blue');
  }

}
