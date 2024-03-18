import { Component, ContentChildren, QueryList, Input, AfterContentInit } from '@angular/core';
import { BreadcrumbItemComponent } from '../breadcrumb-item/breadcrumb-item.component';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements AfterContentInit {
  @Input() maxItems: number = 8;
  @Input() separator: string | any = '>'; // 可以是字符串或 Angular 元件
  @ContentChildren(BreadcrumbItemComponent) breadcrumbItems!: QueryList<BreadcrumbItemComponent>;

  isCollapse: boolean = false;

  ngAfterContentInit() {
    this.isCollapse = this.maxItems < this.breadcrumbItems.length;
  }
}
