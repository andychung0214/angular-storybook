import { applicationConfig, type Meta, type StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { importProvidersFrom } from '@angular/core';
import { SwitchComponent } from 'src/app/components/switch/switch.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const meta: Meta<SwitchComponent> = {
  title: '數據輸入元件/Switch',
  component: SwitchComponent,
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
type Story = StoryObj<SwitchComponent>;

export const Default: Story = {
  args: {
    checked: false,
    label: 'Checkbox',
  },
};


