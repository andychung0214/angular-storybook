import { Component, Input, EventEmitter, Output } from '@angular/core';
import { AccordionHeaderComponent } from '../accordion-header/accordion-header.component';
import { AccordionPanelComponent } from '../accordion-panel/accordion-panel.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports:[
    AccordionPanelComponent,
    CommonModule
  ],
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],

})
export class AccordionComponent {
  @Input() title: string = '';
  isOpen: boolean = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
