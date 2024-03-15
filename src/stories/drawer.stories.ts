import { applicationConfig, type Meta, type StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DrawerComponent } from 'src/app/components/drawer/drawer.component';

const meta: Meta<DrawerComponent> = {
  title: 'Nav-Components/Drawer',
  component: DrawerComponent,
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
type Story = StoryObj<DrawerComponent>;

export const Default: Story = {
  args: {
    isChecked: false,
  },
};


