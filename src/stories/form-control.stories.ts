import { TextfieldComponent } from './../app/components/textfield/textfield.component';
import { applicationConfig, type Meta, type StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';

import { SwitchComponent } from 'src/app/components/switch/switch.component';
// import { TextFieldComponent } from '../app/text-field/text-field.component';
import { moduleMetadata } from '@storybook/angular';
import { RadioComponent } from 'src/app/components/radio/radio.component';
import { FormControlComponent } from 'src/app/components/form-control/form-control.component';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const meta: Meta<FormControlComponent> = {
  title: 'Data-Input-Components/FormControl',
  component: FormControlComponent,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {  },
  // decorators: [
  //   applicationConfig({
  //     providers: [
  //       importProvidersFrom(BrowserAnimationsModule),
  //       // 添加其他全局模块或服务
  //     ],
  //   }),
  // ],
  decorators: [
    moduleMetadata({
      declarations: [TextfieldComponent, RadioComponent, SwitchComponent],
    }),
  ],
};

export default meta;
type Story = StoryObj<FormControlComponent>;


export const WithLabel: Story = {
  args: {
    label: 'FormControl Label',
  },
};

// Repeat for Required, LimitMaxLength, ErrorMessage, etc.