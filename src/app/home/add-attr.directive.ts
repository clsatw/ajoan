import { Directive, Renderer2, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appAddAttr]'
})
export class AddAttrDirective implements OnInit {
  @Input() addAttr;
  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit() {
    // this.el.nativeElement.setAttribute(this.addAttr, '');
    // attribute value is an empty string;
    this.renderer.setAttribute(this.el.nativeElement, this.addAttr, '');
  }
}
