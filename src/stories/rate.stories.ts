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
type Story = StoryObj<RateComponent>;

export const Default: Story = {
  args: {
    isChecked: false,
  },
};


