import { CommonModule } from '@angular/common';
import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-accordion-header',
  standalone: true,
  templateUrl: './accordion-header.component.html',
  styleUrls: ['./accordion-header.component.scss'],
  imports: [CommonModule]
})
export class AccordionHeaderComponent {
  @Input() header: string | HTMLElement | undefined;
  @Input() isExpand: boolean = false;
  @Output() onClick = new EventEmitter<void>();
}
