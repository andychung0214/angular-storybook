import { applicationConfig, moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TextFieldComponent } from 'src/app/components/text-field/text-field.component';


const meta: Meta<TextFieldComponent> = {
  title: 'Data-Display-Components/TextField',
  component: TextFieldComponent,
  tags: ['autodocs'],
  decorators: [

    moduleMetadata({
      declarations: [TextFieldComponent],
    }),
    applicationConfig({
      providers: [
        importProvidersFrom(BrowserAnimationsModule),
      ],
    }),
  ],
};

export default meta;
type Story = StoryObj<TextFieldComponent>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text here',
  isError: false,
  isDisabled: false,
  },
};


