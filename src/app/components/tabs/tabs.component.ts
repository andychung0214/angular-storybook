import { Component, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs',
  template: `
    <ul class="tabs">
      <li *ngFor="let tab of tabs" (click)="selectTab(tab)" [class.active]="tab.active">
        {{ tab.tabTitle }}
      </li>
    </ul>
    <ng-content></ng-content>
  `,
  styles: [`
    .tabs li.active {
      background-color: #ddd;
    }
  `]
})
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent> | undefined;

  ngAfterContentInit() {
    const activeTabs = this.tabs?.filter(tab => tab.active);
    if (activeTabs && activeTabs.length === 0) {
      this.selectTab(this.tabs?.first!); // Add the non-null assertion operator (!) to ensure that the tab is not undefined
    }
  }

  selectTab(tab: TabComponent) {
    this.tabs?.toArray().forEach(t => t.active = false);
    tab.active = true;
  }
}
