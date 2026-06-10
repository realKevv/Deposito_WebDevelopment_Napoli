import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[customHighlight]', 
  standalone: true
})
export class HighlightDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = '#ef4444'; 
    this.el.nativeElement.style.color = '#ffffff';
    this.el.nativeElement.style.fontWeight = 'bold';
    this.el.nativeElement.style.fontSize = '1.1em';
    this.el.nativeElement.style.padding = '4px 8px';
    this.el.nativeElement.style.borderRadius = '6px';
  }
}