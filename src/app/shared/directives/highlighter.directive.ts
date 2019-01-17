import { Directive, ElementRef, HostListener, HostBinding, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appHighlighter]'
})
export class HightlighterDirective {

    @HostBinding('style.color') color: string;

    constructor(
        private el: ElementRef,
        private renderer: Renderer2) { }

    @HostListener('mouseover') onMouseOver() {
        this.el.nativeElement.style.backgroundColor = 'yellow';
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.el.nativeElement.style.backgroundColor = 'initial';
    }

    @HostListener('click') onclick() {
        this.color = 'red';

        const span = this.renderer.createElement('span');
        const text = this.renderer.createText('!!!');

        this.renderer.appendChild(span, text);
        this.renderer.appendChild(this.el.nativeElement, span);
    }
}
