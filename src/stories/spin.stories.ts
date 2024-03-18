import { applicationConfig, moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SpinComponent } from 'src/app/components/spin/spin.component';

const meta: Meta<SpinComponent> = {
  title: 'Feedback-Components/Spin',
  component: SpinComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      declarations: [SpinComponent],
    }),
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
    isLoading: true,
    indicator: '<div>Loading...</div>', // Example of passing HTML as indicator
  },
};

export const WithContent : Story = {
  args: {
    isLoading: true,
  // children: `<div style="width: 200px; height: 100px; background: #eee;"></div>`
  },
};

export const CustomIndicator : Story = {
  args: {
    isLoading: true,
  indicator: `<div style="font-size: 24px; color: #ff0000;">Loading...</div>`
  },
};


