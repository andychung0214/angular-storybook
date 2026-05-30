import { Component } from '@angular/core';
// import { ImgContext  } from '.assets/context.png';
// import { ImgContext  } from '../../../../public/temp.jpg';
// import { TempImg  } from '/temp.jpg';

@Component({
  selector: 'app-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.scss']
})
export class CarouselItemComponent {
  // imgContext: ImgContext | undefined;
  // tempImg: TempImg | undefined;

  imgContext: string = 'assets/context.png';
  tempImg: string = 'temp.jpg';
}
