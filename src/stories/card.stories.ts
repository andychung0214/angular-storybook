import { type Meta, type StoryObj, applicationConfig, moduleMetadata } from '@storybook/angular';
import { fn } from '@storybook/test';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CardComponent } from 'src/app/components/card/card.component';
const meta: Meta<CardComponent> = {
  title: 'Data-Display-Components/Card',
  component: CardComponent,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
  args: { onClick: fn() },
  decorators: [
    applicationConfig({
      providers: [
        importProvidersFrom(BrowserAnimationsModule),
      ],
    }),
  ]
};

export default meta;
type Story = StoryObj<CardComponent>;

export const Default: Story = {
  args: {
    imageUrl: 'https://ithelp.ithome.com.tw/static/2021ironman/event/img/fb.jpg',
    title: '2021 iThome 鐵人賽',
    description: '喚醒心中最強大的鐵人',
    avatarUrl: 'https://ithelp.ithome.com.tw/static/2021ironman/event/img/choose1.png',
  },
};

export const Variant: Story = {
  args: {
    imageUrl: 'https://ithelp.ithome.com.tw/static/2021ironman/event/img/fb.jpg',
    title: '2021 iThome 鐵人賽',
    description: '喚醒心中最強大的鐵人',
    avatarUrl: 'https://ithelp.ithome.com.tw/static/2021ironman/event/img/choose1.png',
  },
};


