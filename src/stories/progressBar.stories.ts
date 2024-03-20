import { applicationConfig, type Meta, type StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ProgressBarComponent } from 'src/app/components/progress-bar/progress-bar.component';

const meta: Meta<ProgressBarComponent> = {
  title: 'Feedback-Components/ProgressBar',
  component: ProgressBarComponent,
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
type Story = StoryObj<ProgressBarComponent>;

export const Default: Story = {
  args: {
    value: 50,
    themeColor: 'primary',
    showInfo: true,
    isStatusActive: false,
  },
};

export const WithoutInfo: Story = {
  args: {
    value: 50,
    themeColor: 'primary',
    showInfo: true,
    isStatusActive: false,
  },
};

export const CustomColor: Story = {
  args: {
    value: 50,
    themeColor: 'primary',
    showInfo: true,
    isStatusActive: false,
  },
};

export const GradientTrack: Story = {
  args: {
    value: 50,
    themeColor: 'primary',
    showInfo: true,
    isStatusActive: false,
  },
};

export const HasActiveAnimation: Story = {
  args: {
    value: 50,
    themeColor: 'primary',
    showInfo: true,
    isStatusActive: false,
  },
};

export const HasTransition: Story = {
  args: {
    value: 50,
    themeColor: 'primary',
    showInfo: true,
    isStatusActive: false,
  },
};


