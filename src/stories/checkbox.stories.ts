import { applicationConfig, type Meta, type StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { importProvidersFrom } from '@angular/core';
import { CheckboxComponent } from 'src/app/components/checkbox/checkbox.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const meta: Meta<CheckboxComponent> = {
  title: 'Data-Input-Components/Checkbox',
  component: CheckboxComponent,
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
type Story = StoryObj<CheckboxComponent>;

export const Default: Story = {
  args: {
    checked: false,
    label: 'Checkbox',
  },
};

export const Checked: Story = {
  args: {
    label: 'Checkbox',
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Checkbox',
    checked: false,
    disabled: true,
  },
};
