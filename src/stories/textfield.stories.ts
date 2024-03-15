import { applicationConfig, type Meta, type StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TextfieldComponent } from 'src/app/components/textfield/textfield.component';

const meta: Meta<TextfieldComponent> = {
  title: 'Data-Input-Components/Textfield',
  component: TextfieldComponent,
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
type Story = StoryObj<TextfieldComponent>;

export const Default: Story = {
  args: {
    isChecked: false,
  },
};


