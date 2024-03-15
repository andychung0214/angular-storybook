import { applicationConfig, type Meta, type StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CarouselComponent } from 'src/app/components/carousel/carousel.component';

const meta: Meta<CarouselComponent> = {
  title: 'Data-Input-Components/Carousel',
  component: CarouselComponent,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
  args: { onChange: fn() },
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
    isChecked: false,
  },
};


