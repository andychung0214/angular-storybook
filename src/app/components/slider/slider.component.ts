import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  imports: [FormsModule],
  standalone: true
})
export class SliderComponent {
  value: number = 50; // 默認滑塊值
}
