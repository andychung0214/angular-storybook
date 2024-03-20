import { applicationConfig, type Meta, type StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SliderComponent } from 'src/app/components/slider/slider.component';

const meta: Meta<SliderComponent> = {
  title: 'Data-Input-Components/Slider',
  component: SliderComponent,
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
type Story = StoryObj<SliderComponent>;

export const Default: Story = {
  args: {
    isChecked: false,
  },
};

export const CustomColor: Story = {
  args: {
    isChecked: false,
  },
};

export const WithStep: Story = {
  args: {
    isChecked: false,
  },
};

export const WithDefaultValue: Story = {
  args: {
    isChecked: false,
  },
};

export const HandmadeSlider: Story = {
  args: {
    isChecked: false,
  },
};

