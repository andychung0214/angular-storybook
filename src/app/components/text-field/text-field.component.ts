import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss']
})
export class TextFieldComponent {
  @Input() prefix?: string;
  @Input() suffix?: string;
  @Input() placeholder: string = '';
  @Input() isError: boolean = false;
  @Input() isDisabled: boolean = false;
  @Output() change: EventEmitter<string> = new EventEmitter<string>();

  onChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.change.emit(value);
  }
}
