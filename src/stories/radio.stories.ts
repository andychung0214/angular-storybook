import { applicationConfig, type Meta, type StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RadioComponent } from 'src/app/components/radio/radio.component';

const meta: Meta<RadioComponent> = {
  title: 'Data-Input-Components/Radio',
  component: RadioComponent,
  tags: ['autodocs'],
  argTypes: {
    themeColor: {
      control: 'color',
    },
  },
  args: { change: fn() },
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
    value: 'Radio',
  },
};

export const CustomizeColor: Story = {
  args: {
    value: 'Radio',
    isChecked: true,
  },
};

export const DisabledRadio: Story = {
  args: {
    value: 'Radio',
    isDisabled: true,
  },
};
