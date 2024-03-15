import { applicationConfig, type Meta, type StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UploadComponent } from 'src/app/components/upload/upload.component';

const meta: Meta<UploadComponent> = {
  title: 'Data-Input-Components/Tooltip',
  component: UploadComponent,
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
type Story = StoryObj<UploadComponent>;

export const Default: Story = {
  args: {
    isChecked: false,
  },
};


