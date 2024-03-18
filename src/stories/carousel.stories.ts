import { applicationConfig, type Meta, type StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CarouselComponent } from 'src/app/components/carousel/carousel.component';

const meta: Meta<CarouselComponent> = {
  title: 'Data-Display-Components/Carousel',
  component: CarouselComponent,
  tags: ['autodocs'],
  decorators: [
    applicationConfig({
      providers: [
        importProvidersFrom(BrowserAnimationsModule),
      ],
    }),
  ],
};

export default meta;
type Story = StoryObj<CarouselComponent>;

export const Default: Story = {
  args: {
    dataSource: [
      'https://via.placeholder.com/600x400/FF0000/FFFFFF?text=1',
      'https://via.placeholder.com/600x400/00FF00/FFFFFF?text=2',
      'https://via.placeholder.com/600x400/0000FF/FFFFFF?text=3',
    ],
    hasDots: true,
    hasControlArrow: true,
    autoplay: false,
  },
};


