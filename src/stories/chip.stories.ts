import { applicationConfig, type Meta, type StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ChipComponent } from 'src/app/components/chip/chip.component';

const meta: Meta<ChipComponent> = {
  title: 'Data-Display-Components/Chip',
  component: ChipComponent,
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
type Story = StoryObj<ChipComponent>;

export const Default: Story = {
  args: {
    isChecked: false,
  },
};


