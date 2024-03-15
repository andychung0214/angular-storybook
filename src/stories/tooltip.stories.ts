import { applicationConfig, type Meta, type StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TooltipComponent } from 'src/app/components/tooltip/tooltip.component';

const meta: Meta<TooltipComponent> = {
  title: 'Data-Display-Components/Tooltip',
  component: TooltipComponent,
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
type Story = StoryObj<TooltipComponent>;

export const Default: Story = {
  args: {
    isChecked: false,
  },
};


