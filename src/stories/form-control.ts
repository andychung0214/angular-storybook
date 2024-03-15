import { applicationConfig, type Meta, type StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormControlComponent } from 'src/app/components/form-control/form-control.component';

const meta: Meta<FormControlComponent> = {
  title: 'Data-Input-Components/FormControl',
  component: FormControlComponent,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
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
type Story = StoryObj<FormControlComponent>;

export const Default: Story = {
  args: {
    isChecked: false,
  },
};


