import { applicationConfig, type Meta, type StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ProgressCircleComponent } from 'src/app/components/progress-circle/progress-circle.component';

const meta: Meta<ProgressCircleComponent> = {
  title: 'Feedback-Components/ProgressCircle',
  component: ProgressCircleComponent,
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
type Story = StoryObj<ProgressCircleComponent>;

export const Default: Story = {
  args: {
    isChecked: false,
  },
};


