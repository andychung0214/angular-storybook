import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-cover',
  template: `
    <div class="card-cover">
      <img [src]="imageUrl" alt="cover">
    </div>
  `,
  styles: [`
    .card-cover img {
      width: 100%;
      display: block;
      height: auto;
    }
  `]
})
export class CardCoverComponent {
  @Input() imageUrl: string | undefined;
}
