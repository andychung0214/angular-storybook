import { Component, Input, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, AfterViewInit {
  @Input() dataSource: string[] = [];
  @Input() hasDots: boolean = true;
  @Input() hasControlArrow: boolean = true;
  @Input() autoplay: boolean = false;

  @ViewChild('carouselWrapper') carouselWrapper: ElementRef<HTMLDivElement> | undefined;

  currentIndex: number = 0;
  imageWidth: number = 600; // 預設值

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.updateCarouselWidth();
    window.addEventListener('resize', this.updateCarouselWidth.bind(this));
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.updateCarouselWidth.bind(this));
  }

  updateCarouselWidth(): void {
    if (this.carouselWrapper) {
      this.imageWidth = this.carouselWrapper.nativeElement.clientWidth;
    }
  }

  handleClickPrev(): void {
    const prevIndex = this.currentIndex - 1 < 0 ? this.dataSource.length - 1 : this.currentIndex - 1;
    this.currentIndex = prevIndex;
  }

  handleClickNext(): void {
    const nextIndex = (this.currentIndex + 1) % this.dataSource.length;
    this.currentIndex = nextIndex;
  }

  makePosition(itemIndex: number): number {
    return (itemIndex - this.currentIndex) * this.imageWidth;
  }

  setCurrentIndex(index: number): void {
    this.currentIndex = index;
  }
}
