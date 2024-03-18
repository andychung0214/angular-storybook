import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {
  @Input() routes: any[] = [];
  @Input() maxItems: number = 8;
  @Input() separator: any = '>'; // 可以是字符串或 Angular 元件，比如 Material Icons
}
