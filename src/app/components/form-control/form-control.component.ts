import { Component, Input, Output, EventEmitter, ContentChild, AfterContentInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss']
})
export class FormControlComponent implements AfterContentInit, OnChanges {
  @Input() label: string | null = '';
  @Input() maxLength: number | null = null;
  @Input() placement: 'top-left' | 'top' | 'top-right' | 'left' | 'right' | 'bottom-left' | 'bottom' | 'bottom-right' = 'top-left';
  @Input() isError: boolean = false;
  @Input() errorMessage: string | null = null;
  @Input() isRequired: boolean = false;
  @Input() backgroundColor?: string;
  @Output() onChange = new EventEmitter<Event>();

  @ContentChild('formControlInput') formControlInput: any;

  childrenValue: string = '';
  isSwitchComponent: boolean = false;

  ngAfterContentInit() {
    if (this.formControlInput) {
      this.isSwitchComponent = this.formControlInput.name === 'Switch'; // This will depend on your implementation
      // Listen to child input changes if necessary
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Handle changes if necessary
  }

  handleOnChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const targetValue = target.value;
    if (this.maxLength && targetValue.length > this.maxLength) return;

    this.childrenValue = targetValue;
    this.onChange.emit(event);
  }
}
