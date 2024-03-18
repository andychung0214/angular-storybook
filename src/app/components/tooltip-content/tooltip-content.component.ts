import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tooltip-content',
  templateUrl: './tooltip-content.component.html',
  styleUrls: ['./tooltip-content.component.scss'],
})
export class TooltipContentComponent {
  @Input() content: string = '';
  @Input() placement: string = 'top';
  @Input() themeColor: string = '#101010';
  @Input() showArrow: boolean = true;

  // Additional logic for positioning and styling based on input properties
}
