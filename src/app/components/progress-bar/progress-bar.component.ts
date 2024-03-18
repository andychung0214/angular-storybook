import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
  animations: [
    trigger('activeAnimation', [
      transition(':enter', [
        style({ left: '-150%' }),
        animate('1s cubic-bezier(0.4, 0.0, 0.2, 1)', style({ left: '100%' }))
      ])
    ])
  ]
})
export class ProgressBarComponent implements OnChanges {
  @Input() value: number = 0;
  @Input() themeColor: string = '#007bff'; // 默认为 bootstrap 的主题颜色
  @Input() showInfo: boolean = true;
  @Input() isStatusActive: boolean = false;
  @Input() className: string = 'primary'; // 默认为 bootstrap 的主题颜色

  formattedValue: number = 0;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['value']) {
      this.formattedValue = this.formatValue(this.value);
    }
  }

  formatValue(value: number): number {
    return Math.max(0, Math.min(100, value));
  }
}
