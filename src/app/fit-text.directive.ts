import { Directive, ElementRef, AfterViewInit, Input } from '@angular/core'

@Directive({
  selector: '[appFitText]',
})
export class FitTextDirective implements AfterViewInit {
  @Input() minFontSize: number = 10
  @Input() maxFontSize: number = 300

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const element = this.el.nativeElement as HTMLElement

    // Initial font assignment based on maxFontSize:
    const originalFontSize = element.style.fontSize
      ? parseInt(element.style.fontSize)
      : 16
    let fontSize = originalFontSize
    if (fontSize > this.maxFontSize) {
      fontSize = this.maxFontSize
    }
    element.style.fontSize = `${fontSize}px`

    // Check element width and overflow status
    let scrollWidth = element.scrollWidth
    const offsetWidth = element.offsetWidth

    let calculatedWidth = `${offsetWidth}px`

    if (scrollWidth > offsetWidth) {
      // Font reduction if there is overflow
      while (scrollWidth > offsetWidth && fontSize > this.minFontSize) {
        fontSize--

        element.style.fontSize = `${fontSize}px`
        scrollWidth = element.scrollWidth

        calculatedWidth = `${offsetWidth - 1}px`
        this.el.nativeElement.style.maxWidth = calculatedWidth
      }

      // Cut text with ellipsis
      if (scrollWidth > offsetWidth) {
        element.style.overflow = 'hidden'
        element.style.textOverflow = 'ellipsis'
      }
    }
  }
}
