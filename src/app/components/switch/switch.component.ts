import { Component, Input, Output, EventEmitter, ElementRef, AfterViewInit } from '@angular/core';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements AfterViewInit {
  @Input() isChecked: boolean = false;
  @Input() isDisabled: boolean = false;
  @Input() size: 'default' | 'small' = 'default';
  @Input() themeColor: string = 'primary';
  @Input() checkedChildren: string = '';
  @Input() unCheckedChildren: string = '';

  @Output() onChange = new EventEmitter<boolean>();

  labelWidth: number = 0;
  thumbSize: number = 18;
  switchWidth: number = this.thumbSize * 2; // Initial value, adjust as needed
  switchColor: string = '';

  constructor(private colorService: ColorService, private elRef: ElementRef) {}

  ngAfterViewInit(): void {
    this.adjustLabelWidth();
  }

  adjustLabelWidth() {
    // Adjust your label width calculation based on your actual element refs
     /* your logic to calculate switch width based on label width */;
    this.switchWidth = this.labelWidth + this.thumbSize * 2;
  }

  handleClick() {
    if (!this.isDisabled) {
      this.onChange.emit(!this.isChecked);
    }
  }
}
