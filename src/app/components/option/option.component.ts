import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss']
})
export class OptionComponent {
  @Input() isChecked: boolean = false;
  @Input() isDisabled: boolean = false;
  @Input() themeColor: 'primary' | 'secondary' | string = 'primary';
  // 假設我們使用 Angular Material Icons, 因此這裡的類型為 string
  @Input() checkedIcon: string = '';
  @Input() unCheckedIcon: string = '';
  @Input() children: string = '';
  @Output() onClick = new EventEmitter<void>();

  constructor() { }

  handleClick(): void {
    if (!this.isDisabled) {
      this.onClick.emit();
    }
  }
}
