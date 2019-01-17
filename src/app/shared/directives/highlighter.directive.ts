import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appHighlighter]'
})
export class HightlighterDirective {

    @HostBinding('style.color') color: string;

    constructor(private el: ElementRef) { }

    @HostListener('mouseover') onMouseOver() {
        this.el.nativeElement.style.backgroundColor = 'yellow';
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.el.nativeElement.style.backgroundColor = 'initial';
    }

    @HostListener('click') onclick() {
        this.color = 'red';
    }
}
