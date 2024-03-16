import { applicationConfig, type Meta, type StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RateComponent } from 'src/app/components/rate/rate.component';

const meta: Meta<RateComponent> = {
  title: 'Data-Input-Components/Rate',
  component: RateComponent,
  tags: ['autodocs'],
  argTypes: {
    themeColor: {
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
type Story = StoryObj<RateComponent>;

export const Default: Story = {
  args: {
    count: 5,
  defaultValue: 0,
  character: 'star', // 或使用 Material Icons 字符串
  size: 32,
  isDisabled: false,
  allowHalf: true,
  },
};

export const HalfRating : Story = {
  args: {
    ...Default.args,
    defaultValue: 2.5,
  },
};

export const Disabled : Story = {
  args: {
    ...Default.args,
  isDisabled: true,
  },
};

