import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation } from '@angular/core';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-button',
  standalone:true,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  encapsulation: ViewEncapsulation.ShadowDom,
  imports: [CommonModule]
})
export class ButtonComponent {
  @Input() variant: 'contained' | 'outlined' | 'text' = 'contained';
  @Input() className: string | null = null;
  @Input() themeColor: string = 'primary';
  @Input() isLoading: boolean = false;
  @Input() isDisabled: boolean = false;
  @Input() startIcon?: any; // Use appropriate type for icons
  @Input() endIcon?: any; // Use appropriate type for icons
  @Input() content?: string | null = null;
  @Output() onClick = new EventEmitter<Event>();

  btnColor: string = '';

  constructor(private colorService: ColorService) {}

  ngOnChanges(): void {
    this.btnColor = this.colorService.makeColor({ themeColor: this.themeColor, isDisabled: this.isDisabled });
  }

  handleClick(event: Event): void {
    this.onClick.emit(event);
  }
}
