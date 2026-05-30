import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, ElementRef, AfterViewInit } from '@angular/core';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
  standalone: true,
  imports:[CommonModule, MatIconModule]
})
export class SwitchComponent {
  @Input() isChecked = false;
  @Input() isDisabled = false;
  @Input() size: 'default' | 'small' = 'default';
  @Input() themeColor = 'primary';
  @Input() checkedChildren = '';
  @Input() unCheckedChildren = '';

  @Output() onChange = new EventEmitter<boolean>();

  get switchWidth() {
    return this.size === 'small' ? 40 : 60;
  }

  get thumbSize() {
    return this.size === 'small' ? 12 : 18;
  }

  get switchColor() {
    return this.isChecked ? 'green' : '#ccc';
  }

  toggleSwitch() {
    if (!this.isDisabled) {
      this.isChecked = !this.isChecked;
      this.onChange.emit(this.isChecked);
    }
  }
}
