import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-breadcrumb-item',
  templateUrl: './breadcrumb-item.component.html',
  styleUrls: ['./breadcrumb-item.component.scss']
})
export class BreadcrumbItemComponent {
  @Input() label: string | null = null;
  @Input() icon: any = null; // 這裡的 icon 應為一個 Angular 元件或 Material Icons 的名稱
  @Input() to: string | null = null;

  @Output() navigate: EventEmitter<string> = new EventEmitter<string>();

  handleClick() {
    if (this.to) {
      this.navigate.emit(this.to);
    }
  }
}
