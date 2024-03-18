import { applicationConfig, type Meta, type StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SelectComponent } from 'src/app/components/select/select.component';

const meta: Meta<SelectComponent> = {
  title: 'Nav-Components/Select',
  component: SelectComponent,
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
type Story = StoryObj<SelectComponent>;

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

export const Default: Story = {
  args: {
    options,
  placeholder: 'Please select an option',
  },
};

export const WithValue : Story = {
  args: {
    ...Default.args,
  value: 'option2',
  },
};

export const Disabled : Story = {
  args: {
    ...Default.args,
  isDisabled: true,
  },
};

export const Loading : Story = {
  args: {
    ...Default.args,
  isLoading: true,
  },
};


