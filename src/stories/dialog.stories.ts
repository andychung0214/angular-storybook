import { applicationConfig, type Meta, type StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DialogComponent } from 'src/app/components/dialog/dialog.component';

const meta: Meta<DialogComponent> = {
  title: 'Data-Input-Components/Dialog',
  component: DialogComponent,
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
type Story = StoryObj<DialogComponent>;

export const Default: Story = {
  args: {
    isChecked: false,
  },
};


