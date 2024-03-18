import { applicationConfig, type Meta, type StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BadgeComponent } from 'src/app/components/badge/badge.component';

const meta: Meta<BadgeComponent> = {
  title: 'Data-Display-Components/Badge',
  component: BadgeComponent,
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
type Story = StoryObj<BadgeComponent>;

export const Default: Story = {
  args: {
    content: '4',
    placement: 'top-right',
  },
};


export const TopRight : Story = {
  args: {
    content: '4',
    placement: 'top-right',
  },
};

export const BottomLeft : Story = {
  args: {
    content: '99+',
  placement: 'bottom-left',
  },
};

