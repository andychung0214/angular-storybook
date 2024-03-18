import { Component, Input, OnInit, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-progress-circle',
  templateUrl: './progress-circle.component.html',
  styleUrls: ['./progress-circle.component.scss']
})
export class ProgressCircleComponent implements OnInit, AfterViewInit {
  @Input() value: number = 0;
  @Input() themeColor: string = 'primary';
  @Input() isClockwise: boolean = true;
  @Input() strokeColor?: { [offset: string]: string };

  size: number = 100; // Default size
  defaultStrokeWidth: number = 8;
  radius: number = 0;
  perimeter: number = 0;
  argLength: number = 0;

  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {
    this.calculateDimensions();
  }

  ngAfterViewInit(): void {
    this.calculateDimensions();
    window.addEventListener('resize', this.calculateDimensions.bind(this));
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.calculateDimensions.bind(this));
  }

  calculateDimensions(): void {
    // Assuming the size of the component is defined by its width for simplicity
    this.size = this.elRef.nativeElement.clientWidth;
    this.defaultStrokeWidth = this.size * 0.08;
    this.radius = (this.size - this.defaultStrokeWidth) / 2;
    this.perimeter = this.radius * 2 * Math.PI;
    this.argLength = this.perimeter * (Math.min(100, Math.max(0, this.value)) / 100);
  }

  get strokeDasharray(): string {
    return `${this.argLength} ${this.perimeter}`;
  }

  get transform(): string {
    return this.isClockwise ? 'rotate(-90deg)' : 'rotate(90deg) scale(-1, 1)';
  }
}
