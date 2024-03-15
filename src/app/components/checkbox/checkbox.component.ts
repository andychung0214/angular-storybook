import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {
  /** 開啟或關閉 **/
  @Input() isChecked = false;
  /** 是否禁用 **/
  @Input() isDisabled = false;
  /** 內容 **/
  @Input() label = 'checkbox';
  /** 主題配色，primary、secondary 或是自己傳入色票 **/
  @Input() backgroundColor?: string;

  @Output() onClick = new EventEmitter<boolean>();

  toggleCheckbox() {
    if (!this.isDisabled) {
      this.isChecked = !this.isChecked;
      this.onClick.emit(this.isChecked);
    }
  }
}
