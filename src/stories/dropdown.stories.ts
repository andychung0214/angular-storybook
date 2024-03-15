import { applicationConfig, type Meta, type StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DropdownComponent } from 'src/app/components/dropdown/dropdown.component';

const meta: Meta<DropdownComponent> = {
  title: 'Nav-components/Dropdown',
  component: DropdownComponent,
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
type Story = StoryObj<DropdownComponent>;

export const Default: Story = {
  args: {
    isChecked: false,
  },
};


