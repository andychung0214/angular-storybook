// badge.component.ts
import { Component, Input } from '@angular/core';
import { BadgePlacement, getPlacementStyle, PlacementStyle } from './placement-style.util';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
})
export class BadgeComponent {
  @Input() placement: BadgePlacement = 'top-right';
  @Input() content: string | number | null = null; // 徽章的內容

  get placementStyle(): PlacementStyle {
    return getPlacementStyle(this.placement);
  }
}
