import { Directive, HostBinding, Input, AfterViewInit, ElementRef } from '@angular/core';

@Directive({
  selector: 'img[appLazyload]'
})
export class LazyloadDirective implements AfterViewInit {

  @HostBinding('attr.src') srcAttr = null;
  @Input() src: string;

  constructor(private el: ElementRef) { }

  private lazyLoadImage() {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(({ isIntersecting }) => {
        if (isIntersecting) {
          this.loadImage();
          obs.unobserve(this.el.nativeElement);
        }
      });
    });
    obs.observe(this.el.nativeElement);
  }

  ngAfterViewInit() {
    this.canLazyLoad() ? this.lazyLoadImage() : this.loadImage();
  }

  private canLazyLoad() {
    return window && 'IntersectionObserver' in window;
  }


  private loadImage() {
    this.srcAttr = this.src;
  }
}
