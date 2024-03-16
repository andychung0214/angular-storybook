import { applicationConfig, type Meta, type StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SwitchComponent } from 'src/app/components/switch/switch.component';

const meta: Meta<SwitchComponent> = {
  title: 'Data-Input-Components/Switch',
  component: SwitchComponent,
  tags: ['autodocs'],
  argTypes: {
    themeColor: {
      control: 'color',
    },
  },
  args: { onChange: fn() },
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

  isChecked: false,
  isDisabled: false,
  size: 'default',
  themeColor: 'primary',
  checkedChildren: 'On',
  unCheckedChildren: 'Off',
  },
};

export const Checked: Story = {
  args: {

    ...Default.args,
    isChecked: true,
  },
};

