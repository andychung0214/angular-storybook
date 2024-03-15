import { applicationConfig, type Meta, type StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { InfiniteScrollComponent } from 'src/app/components/infinite-scroll/infinite-scroll.component';

const meta: Meta<InfiniteScrollComponent> = {
  title: 'Data-Display-Components/InfiniteScroll',
  component: InfiniteScrollComponent,
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
type Story = StoryObj<InfiniteScrollComponent>;

export const Default: Story = {
  args: {
    isChecked: false,
  },
};


