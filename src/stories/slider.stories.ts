import { applicationConfig, type Meta, type StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SliderComponent } from 'src/app/components/slider/slider.component';

const meta: Meta<SliderComponent> = {
  title: 'Data-Input-Components/Slider',
  component: SliderComponent,
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
type Story = StoryObj<SliderComponent>;

export const Default: Story = {
  args: {

  },
};

export const CustomColor: Story = {
  args: {

  },
};

export const WithStep: Story = {
  args: {

  },
};

export const WithDefaultValue: Story = {
  args: {

  },
};

export const HandmadeSlider: Story = {
  args: {

  },
};

