import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent {
  @Input() isChecked: boolean = false;
  @Input() isDisabled: boolean = false;
  @Input() themeColor: 'primary' | 'secondary' | string = 'primary';
  @Input() value: any = null;
  @Output() change = new EventEmitter<any>();

  handleClick(): void {
    if (!this.isDisabled) {
      this.change.emit(this.value);
    }
  }
}
