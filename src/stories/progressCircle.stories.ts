import { GradientTrack } from './progressBar.stories';
import { applicationConfig, type Meta, type StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ProgressCircleComponent } from 'src/app/components/progress-circle/progress-circle.component';

const meta: Meta<ProgressCircleComponent> = {
  title: 'Feedback-Components/ProgressCircle',
  component: ProgressCircleComponent,
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
type Story = StoryObj<ProgressCircleComponent>;

export const Default: Story = {
  args: {
    value: 50,
  themeColor: 'primary',
  isClockwise: true,
  },
};

export const LimitValue: Story = {
  args: {
    value: 50,
  themeColor: 'primary',
  isClockwise: true,
  },
};

export const CustomColor: Story = {
  args: {
    value: 50,
  themeColor: 'primary',
  isClockwise: true,
  },
};

export const GradientTrackk: Story = {
  args: {
    value: 50,
  themeColor: 'primary',
  isClockwise: true,
  },
};


export const CounterClockwise: Story = {
  args: {
    value: 50,
  themeColor: 'primary',
  isClockwise: true,
  },
};

export const Size: Story = {
  args: {
    value: 50,
  themeColor: 'primary',
  isClockwise: true,
  },
};


