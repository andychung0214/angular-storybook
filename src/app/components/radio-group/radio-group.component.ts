import { Component, Input, Output, EventEmitter, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { RadioComponent } from '../radio/radio.component';

@Component({
  selector: 'app-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.scss']
})
export class RadioGroupComponent implements AfterContentInit {
  @Input() value: any = null;
  @Output() valueChange = new EventEmitter<any>();
  @ContentChildren(RadioComponent) radios!: QueryList<RadioComponent>;

  ngAfterContentInit(): void {
    this.radios.forEach((radio: RadioComponent) => {
      radio.change.subscribe((val: any) => {
        if (!radio.isDisabled) {
          this.updateValue(val);
        }
      });
    });
  }

  private updateValue(val: any): void {
    if (this.value !== val) {
      this.value = val;
      this.valueChange.emit(this.value);
      this.updateRadios();
    }
  }

  private updateRadios(): void {
    this.radios.forEach((radio: RadioComponent) => {
      radio.isChecked = radio.value === this.value;
    });
  }
}
