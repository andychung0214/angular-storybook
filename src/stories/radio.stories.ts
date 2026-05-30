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
    backgroundColor: {
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
    label: 'Option 1',
    name: 'option',
    value: '1',
    checked: true,
    isDisable: false
  },
};

export const CustomizeColor: Story = {
  args: {
    label: 'Option 2',
    name: 'option',
    value: '2',
    checked: false,
    isDisable: false
  },
};

export const DisabledRadio: Story = {
  args: {
    label: 'Option 3',
    name: 'option',
    value: '2',
    checked: false,
    isDisable: true
  },
};

export const WithRadioGroup: Story = {
  args: {
    label: 'Option 4',
    name: 'option',
    value: '2',
    checked: false,
    isDisable: false
  },
};
