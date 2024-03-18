import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss']
})
export class ChipComponent {
  @Input() variant: 'contained' | 'outlined' = 'contained';
  @Input() label: string | HTMLElement | undefined;
  @Input() themeColor: 'primary' | 'secondary' | string = 'primary';
  @Input() icon?: HTMLElement; // Adjust how you pass icons
  @Input() deleteIcon?: HTMLElement; // Adjust how you pass delete icons
  @Output() onDelete = new EventEmitter<void>();

  color: string;

  constructor() {
    // Define how to use a service or method to get color based on themeColor
    this.color = this.getColor(this.themeColor);
  }

  getColor(themeColor: string): string {
    // Implementation to determine color based on themeColor input
    return '#000'; // Placeholder return
  }

  handleDelete() {
    this.onDelete.emit();
  }
}
