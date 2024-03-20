import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconRegistry, MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss'],
  standalone: true,
  imports: [CommonModule, MatIconModule]
})
export class RateComponent implements OnInit {
  @Input() count: number = 5;
  @Input() defaultValue: number = 0;
  @Input() character: string = 'star'; // 使用 string 替代 React 中的元素
  @Input() size: number = 32;
  @Input() isDisabled: boolean = false;
  @Input() allowHalf: boolean = false;
  @Input() themeColor: string = '#FBDB14'; // 直接使用顏色代碼

  @Output() onChange: EventEmitter<number> = new EventEmitter();

  innerValue: number = 0;
  previewValue: number = 0;
  stars: number[] = [];

  ngOnInit() {
    this.innerValue = this.defaultValue;
    this.previewValue = this.defaultValue;
    this.stars = Array(this.count).fill(0).map((x, i) => i + 1);
  }

  handleOnClick(value: number) {
    if (this.isDisabled) return;
    this.innerValue = this.innerValue === value ? 0 : value;
    this.previewValue = this.innerValue;
    this.onChange.emit(this.innerValue);
  }

  handleChangePreviewValue(value: number) {
    if (!this.isDisabled) {
      this.previewValue = value;
    }
  }
}
