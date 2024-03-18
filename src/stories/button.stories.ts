import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';

import { applicationConfig, type Meta, type StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonComponent } from 'src/app/components/button/button.component';


const meta: Meta<ButtonComponent> = {
  title: 'Data-Input-Components/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    themeColor: {
      control: 'color',
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
  decorators: [
    applicationConfig({
      providers: [
        importProvidersFrom(BrowserAnimationsModule),
        // 添加其他全局模块或服务
      ],
    }),
  ],
};



export default meta;
type Story = StoryObj<ButtonComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default : Story = {
  args: {
    variant: 'contained',
  themeColor: 'primary',
  content: 'Contained Button',
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
  themeColor: 'secondary',
  content: 'Outlined Button',
  },
};

export const LoadingButton: Story = {
  args: {
    variant: 'contained',
  themeColor: 'primary',
  content: 'Loading...',
  isLoading: true,
  },
};


export const DisabledButton : Story = {
  args: {
    variant: 'contained',
  themeColor: 'primary',
  content: 'Disabled Button',
  isDisabled: true,
  },
};

export const StartIconButton: Story = {
  args: {
    variant: 'outlined',
  themeColor: 'secondary',
  content: 'Outlined Button',
  // startIcon: <CloudDownloadIcon />,
  },
};


export const OutlinedStartIconButton : Story = {
  args: {
    variant: 'outlined',
  themeColor: 'secondary',
  content: 'Outlined Button',
  },
};


export const EndIconButton : Story = {
  args: {
    variant: 'outlined',
  themeColor: 'secondary',
  content: 'Outlined Button',
  },
};


export const CustomizeButton : Story = {
  args: {
    variant: 'outlined',
  themeColor: 'secondary',
  content: 'Outlined Button',

  },
};



