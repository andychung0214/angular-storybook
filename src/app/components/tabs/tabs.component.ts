import { Component, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements AfterContentInit {
  ngAfterContentInit(): void {
    throw new Error('Method not implemented.');
  }
  // @ContentChildren(TabComponent) tabs: QueryList<TabComponent> | undefined;

  // ngAfterContentInit() {
  //   const activeTabs = this.tabs?.filter(tab => tab.active);
  //   if (activeTabs && activeTabs.length === 0) {
  //     this.selectTab(this.tabs?.first!); // Add the non-null assertion operator (!) to ensure that the tab is not undefined
  //   }
  // }

  // selectTab(tab: TabComponent) {
  //   this.tabs?.toArray().forEach(t => t.active = false);
  //   tab.active = true;
  // }
}
