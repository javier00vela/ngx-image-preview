import { Component, Directive, ElementRef, HostBinding, Input, OnInit } from '@angular/core';
import { Source } from './interfaces/source.interface';
import { SourceModel } from './models/source.model';
@Component({
  selector: 'ngx-image-preview',
  templateUrl: './ngx-image-preview.html'
})

export class NgxImagePreviewComponent implements OnInit {
  @HostBinding('attr.src') srcAttr = null;
  @Directive({
    selector: 'img[default]',
    host: {
      '(load)' : 'hideLoader()',
      '(error)': 'updateUrl()',
      '[src]': 'sourceModel.loading'
    }
  })
  @Input() source!: Source;
  public sourceModel: Source = new SourceModel();

  constructor(private el: ElementRef) {}

  ngOnChanges(): void {
    this.sourceModel.loading = this.source.loading;
    this.sourceModel.loaderSource = this.source.loaderSource;
    this.sourceModel.delay = this.source.delay;
    this.sourceModel.styles = this.source.styles;
  }

  private lazyLoadImage(){
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

  private loadImage() {
    setInterval(()=>{
      this.sourceModel.src = this.source.src;
      this.hideLoader();
    }, this.sourceModel.delay)
  }


  private canLazyLoad() {
    return window && 'IntersectionObserver' in window;
  }

  public updateUrl() {
    this.sourceModel.loaderSource = this.source.loaderSource;
  }

  public hideLoader() {
    this.sourceModel.loading = false;
  }

  ngOnInit(): void { }

  ngAfterViewInit() {
    this.canLazyLoad() ? this.lazyLoadImage() : this.loadImage();
  }


}
