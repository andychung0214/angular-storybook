import { Meta, StoryObj, applicationConfig, moduleMetadata } from '@storybook/angular';
import { fn } from '@storybook/test';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CardComponent } from 'src/app/components/card/card.component';
import { CardMetaComponent } from 'src/app/components/card-meta/card-meta.component';
import { CardCoverComponent } from 'src/app/components/card-cover/card-cover.component';

const meta: CardComponent = {
  title: 'Data-Display-Components/Card',
  component: CardComponent,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
  args: { onChange: fn() },
  decorators: [
    moduleMetadata({
      declarations: [CardComponent, CardMetaComponent, CardCoverComponent],
    }),
    applicationConfig({
      providers: [
        importProvidersFrom(BrowserAnimationsModule),
      ],
    }),
  ],
  template: `
      <app-card>
        <app-card-cover imageUrl="https://example.com/image.jpg"></app-card-cover>
        <app-card-meta
          title="Card Title"
          description="Card description goes here."
          avatarUrl="https://example.com/avatar.jpg">
        </app-card-meta>
      </app-card>
    `,
};

export default meta;
type Story = StoryObj<CardComponent>;

export const Default: Story = {
  args: {
    isChecked: false,
  },
};


