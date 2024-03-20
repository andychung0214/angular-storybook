import { Component, Input, Output, EventEmitter, ElementRef, AfterViewInit } from '@angular/core';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent {
  @Input() isChecked: boolean = false;
  @Input() isDisabled: boolean = false;
  @Input() size: string = 'default';
  @Input() themeColor: string = 'primary';
  @Input() checkedChildren: string = '';
  @Input() unCheckedChildren: string = '';
  @Output() onChange = new EventEmitter<boolean>();

  get switchWidth(): number {
    return this.size === 'small' ? 40 : 60;
  }

  get thumbSize(): number {
    return this.size === 'small' ? 12 : 20;
  }

  get switchColor(): string {
    // 實際應用中，themeColor 可以根據需要來決定顏色
    return this.isChecked ? '#1890ff' : '#ccc';
  }

  toggleSwitch() {
    this.onChange.emit(!this.isChecked);
  }
}
