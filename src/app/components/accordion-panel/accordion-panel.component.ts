import { Component, Input, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-accordion-panel',
  standalone: true,
  templateUrl: './accordion-panel.component.html',
  styleUrls: ['./accordion-panel.component.scss']
})
export class AccordionPanelComponent implements AfterViewInit {
  @Input() isExpand: boolean = false;
  constructor(public elementRef: ElementRef) {}

  ngAfterViewInit() {
    // Additional logic to handle dynamic height adjustments
  }
}
