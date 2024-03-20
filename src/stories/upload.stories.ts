import { applicationConfig, moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UploadComponent } from 'src/app/components/upload/upload.component';

const meta: Meta<UploadComponent> = {
  title: 'Data-Input-Components/Upload',
  component: UploadComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      declarations: [UploadComponent],
    }),
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
    accept: 'image/*',
  multiple: true,
  },
};

export const PreviewUploadImage: Story = {
  args: {
    accept: 'image/*',
  multiple: true,
  },
};

export const UploadMultiple: Story = {
  args: {
    accept: 'image/*',
  multiple: true,
  },
};

export const PictureWall: Story = {
  args: {
    accept: 'image/*',
  multiple: true,
  },
};


