import { applicationConfig, moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ModalComponent } from 'src/app/components/modal/modal.component';

const meta: Meta<ModalComponent> = {
  title: 'Feedback-Components/Modal',
  component: ModalComponent,
  tags: ['autodocs'],
  decorators: [

    moduleMetadata({
      declarations: [ModalComponent],
      imports: [BrowserAnimationsModule],
    }),
    applicationConfig({
      providers: [
        importProvidersFrom(BrowserAnimationsModule),
      ],
    }),
  ],
};

export default meta;
type Story = StoryObj<ModalComponent>;

export const Default: Story = {
  args: {
    isOpen: true,
  hasMask: true,
  animationDuration: 200,
  },
};


