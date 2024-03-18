import { Component, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-spin',
  templateUrl: './spin.component.html',
  styleUrls: ['./spin.component.scss']
})
export class SpinComponent implements AfterViewInit {
  @Input() indicator: string | HTMLElement = '';
  @Input() isLoading: boolean = false;
  @ViewChild('indicatorElement') indicatorElement: ElementRef | undefined;

  indicatorSize: { width: number, height: number } = { width: 0, height: 0 };

  ngAfterViewInit(): void {
    setTimeout(() => { // Ensure view has been initialized
      if (this.indicatorElement) {
        const element = this.indicatorElement.nativeElement.children[0];
        this.indicatorSize = {
          width: element.clientWidth,
          height: element.clientHeight,
        };
      }
    });
  }
}
