import { Placement } from './badge.stories';
import { applicationConfig, moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipComponent } from 'src/app/components/tooltip/tooltip.component';
import { TooltipContentComponent } from 'src/app/components/tooltip-content/tooltip-content.component';
import { CommonModule } from '@angular/common';


const meta: Meta<TooltipComponent> = {
  title: 'Data-Display-Components/Tooltip',
  component: TooltipComponent,
  tags: ['autodocs'],
  decorators: [
    // moduleMetadata({
    //   declarations: [TooltipComponent, TooltipContentComponent],
    //   imports: [CommonModule],
    // }),
    applicationConfig({
      providers: [
        importProvidersFrom(BrowserAnimationsModule),
      ],
    }),
  ],
};

export default meta;
type Story = StoryObj<TooltipComponent>;

export const Default: Story = {
  args: {
    showArrow: true,
  },
};

export const placement: Story = {
  args: {
    showArrow: true,
  },
};

export const CustomColor: Story = {
  args: {
    showArrow: true,
  },
};

export const ShowArrow: Story = {
  args: {
    showArrow: true,
  },
};


