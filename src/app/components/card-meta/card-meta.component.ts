import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-meta',
  template: `
    <div class="card-meta">
      <div *ngIf="avatarUrl" class="meta-avatar">
        <img [src]="avatarUrl" alt="avatar">
      </div>
      <div class="meta-content">
        <div class="meta-title" *ngIf="title">{{ title }}</div>
        <div class="meta-description" *ngIf="description">{{ description }}</div>
      </div>
    </div>
  `,
  styles: [`
    .card-meta {
      display: flex;
      padding: 16px;
    }
    .meta-avatar img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 16px;
    }
    .meta-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .meta-title {
      font-size: 16px;
      font-weight: bold;
    }
    .meta-description {
      font-size: 14px;
      color: #666;
    }
  `]
})
export class CardMetaComponent {
  @Input() title: string | undefined;
  @Input() description: string | undefined;
  @Input() avatarUrl: string | undefined;
}
