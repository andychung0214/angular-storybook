import { applicationConfig, type Meta, type StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AccordionComponent } from 'src/app/components/accordion/accordion.component';

const meta: Meta<AccordionComponent> = {
  title: 'Data-Input-Components/Accordion',
  component: AccordionComponent,
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
type Story = StoryObj<AccordionComponent>;

export const Default: Story = {
  args: {
    isChecked: false,
  },
};


