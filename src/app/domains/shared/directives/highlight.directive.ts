import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[highlight]',
  standalone: true
})
export class HighlightDirective {
//las directivas es la manipulacion directa del dom
element = inject(ElementRef);
constructor() { }

ngOnInit(){
  this.element.nativeElement.style.backgroundColor="red";
}
}
