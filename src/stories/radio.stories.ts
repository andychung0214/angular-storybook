import { applicationConfig, type Meta, type StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RadioComponent } from 'src/app/components/radio/radio.component';

const meta: Meta<RadioComponent> = {
  title: '數據輸入元件/Radio',
  component: RadioComponent,
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
        // 添加其他全局模块或服务
      ],
    }),
  ],
};

export default meta;
type Story = StoryObj<RadioComponent>;

export const Default: Story = {
  args: {
    children: 'Radio',
  },
};

export const CustomizeColor: Story = {
  args: {
    children: 'Radio',
    isChecked: true,
  },
};

export const DisabledRadio: Story = {
  args: {
    children: 'Radio',
    isDisabled: true,
  },
};
