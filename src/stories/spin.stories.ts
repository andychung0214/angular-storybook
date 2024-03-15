import { applicationConfig, type Meta, type StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SpinComponent } from 'src/app/components/spin/spin.component';

const meta: Meta<SpinComponent> = {
  title: 'Feedback-Components/Spin',
  component: SpinComponent,
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
type Story = StoryObj<SpinComponent>;

export const Default: Story = {
  args: {
    isChecked: false,
  },
};


