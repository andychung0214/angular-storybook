import { Component, Input, EventEmitter, Output } from '@angular/core';
import { AccordionHeaderComponent } from '../accordion-header/accordion-header.component';
import { AccordionPanelComponent } from '../accordion-panel/accordion-panel.component';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports:[
    AccordionHeaderComponent,
    AccordionPanelComponent
  ],
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {
  @Input() header: string | HTMLElement | undefined;
  @Input() isExpand: boolean = false;
  @Output() onClick = new EventEmitter<void>();
}
