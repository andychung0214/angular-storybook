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
    badgeContent: 4,
    placement: 'topLeftStyle',
  },
};

export const Placement: Story = {
  args: {
    badgeContent: 4,
    placement: 'topRightStyle',
  },
};

export const WithMax: Story = {
  args: {
    badgeContent: 87,
    placement: 'bottomLeftStyle',
  },
};

export const VariantDot: Story = {
  args: {
    badgeContent: 4,
    placement: 'DotBadge',
  },
};

export const CustomColor: Story = {
  args: {
    badgeContent: 4,
    placement: 'top-right',
  },
};

export const ShowZero: Story = {
  args: {
    badgeContent: 4,
    placement: 'top-right',
  },
};


export const TopRight : Story = {
  args: {
    badgeContent: 4,
    placement: 'top-right',
  },
};

export const BottomLeft : Story = {
  args: {
    badgeContent: '99+',
  placement: 'bottom-left',
  },
};

