import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent {
  @Input() label: string = '';


@Input() name: string = '';
@Input() backgroundColor: string = '#f0f0f0';
  @Input() value: any = null;
  @Input() checked: boolean = false;
  @Input() isDisable: boolean = false;
  @Output() change = new EventEmitter<any>();

  onChange() {
    this.change.emit(this.value);
  }
}
