import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Option {
  value: string;
  label: string;
}

@Component({
 selector: 'app-select',
 templateUrl: './select.component.html',
 styleUrls: ['./select.component.scss']
})



export class SelectComponent implements OnInit {
  ngOnInit(): void {
    // Add initialization logic here
  }

  @Input() options: Option[] = [];
  @Input() value: string = '';
  @Input() placeholder: string = '';
  @Input() isDisabled: boolean = false;
  @Input() isLoading: boolean = false;
  @Output() selectChange = new EventEmitter<string>();

  isOpen = false;

  get selectedOption(): Option | undefined {
    return this.options.find(option => option.value === this.value);
  }

  toggleDropdown() {
    if (!this.isDisabled && !this.isLoading) {
      this.isOpen = !this.isOpen;
    }
  }

  selectOption(value: string) {
    this.value = value;
    this.selectChange.emit(value);
    this.isOpen = false;
  }
}
