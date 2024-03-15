import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent {
  @Input() backgroundColor?: string;
  @Input() isChecked: boolean = false;
  @Input() isDisabled: boolean = false;
  @Input() themeColor: string = 'primary';
  @Output() onChange: EventEmitter<boolean> = new EventEmitter();

  toggleSwitch(): void {
    if (!this.isDisabled) {
      this.isChecked = !this.isChecked;
      this.onChange.emit(this.isChecked);
    }
  }
}
