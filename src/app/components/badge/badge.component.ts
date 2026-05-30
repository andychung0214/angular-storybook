import { ShowZero } from './../../../stories/badge.stories';
// badge.component.ts
import { Component, Input } from '@angular/core';
import { BadgePlacement, getPlacementStyle, PlacementStyle } from './placement-style.util';
import { MatIconRegistry, MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
  standalone: true,
  imports: [MatIconModule,CommonModule]
})
export class BadgeComponent {
  @Input() placement : string | undefined;
  @Input() badgeContent: string | number | undefined; // 徽章的內容

  @Input() max: number = 99; // 最大值
  @Input() showZero: boolean = false; // 是否顯示 0
  @Input() dot: boolean = false; // 是否是點
  @Input() color: string = 'red'; // 徽章的顏色

  content !: string | null;

//   ngOnInit(): void {
//     this.content = this.makeBadgeContent({ showZero: this.showZero, max: this.max, badgeContent: this.badgeContent });
//   }

//   makeBadgeContent({ showZero, max, badgeContent }: { showZero: boolean, max: number, badgeContent: number | undefined }): string | null {
//     if (showZero && badgeContent === 0) {
//       return '0';
//     }

//     if (!showZero && badgeContent === 0) {
//       return null;
//     }

//     return badgeContent && badgeContent > max ? `${max}+` : (this.badgeContent?.toString() ?? null);
//   }
// }
}
