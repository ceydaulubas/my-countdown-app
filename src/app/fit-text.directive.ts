import { Directive, ElementRef, AfterViewInit, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFitText]'
})
export class FitTextDirective implements AfterViewInit {
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit() {
    this.resizeText();
  }

  @HostListener('window:resize')
  onResize() {
    this.resizeText();
  }
  
  resizeText() {
    if (this.el) { 
      const fitWidth = this.el.nativeElement.offsetWidth;
    const inner = this.el.nativeElement.querySelector('.fit-inner');
    if (!inner) {
      const innerElement = this.renderer.createElement('span');
      innerElement.classList.add('fit-inner');
      this.renderer.appendChild(this.el.nativeElement, innerElement);
      this.renderer.appendChild(innerElement, this.el.nativeElement.firstChild);
    }
    const innerWidth = inner.offsetWidth;

    const calc = innerWidth / fitWidth;
    this.renderer.setStyle(this.el.nativeElement, 'fontSize', `${calc}rem`);
  }
  }
}
