import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  template: `
    <div *ngIf="active">
      <ng-content></ng-content>
    </div>
  `
})
export class TabComponent {
  @Input() tabTitle: string | undefined;
  @Input() active = false;
}
