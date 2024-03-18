import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="card">
      <ng-content select="app-card-cover"></ng-content>
      <ng-content select="app-card-meta"></ng-content>
    </div>
  `,
  styles: [`
    .card {
      border: 1px solid #DDD;
      border-radius: 4px;
      overflow: hidden;
    }
  `]
})
export class CardComponent {
}
