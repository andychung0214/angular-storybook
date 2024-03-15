import { applicationConfig, type Meta, type StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TabsComponent } from 'src/app/components/tabs/tabs.component';

const meta: Meta<TabsComponent> = {
  title: 'Feedback-Components/Tabs',
  component: TabsComponent,
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
type Story = StoryObj<TabsComponent>;

export const Default: Story = {
  args: {
    isChecked: false,
  },
};


