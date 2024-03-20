import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconRegistry, MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  standalone: true,
  styleUrls: ['./card.component.scss'],
  imports: [CommonModule, MatIconModule,MatButtonModule]
})
export class CardComponent {
  @Input() imageUrl?: string;
  @Input() title?: string;
  @Input() description?: string;
  @Input() avatarUrl?: string;
  @Input()
  backgroundColor?: string;
  @Output()
  onClick = new EventEmitter<Event>();

  // constructor(private matIconRegistry: MatIconRegistry) {
  //   // this.matIconRegistry.addSvgIcon('choose1', this.avatarUrl);
  //   this.matIconRegistry.setDefaultFontSetClass('my-icons');
  // }
}
