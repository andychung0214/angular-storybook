import { applicationConfig, moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastComponent } from 'src/app/components/toast/toast.component';
import { ToastService } from 'src/app/services/toast.service';

const meta: Meta<ToastComponent> = {
  title: 'Feedback-Components/Toast',
  component: ToastComponent,
  tags: ['autodocs'],
  decorators: [
    // moduleMetadata({
    //   // Import the ToastModule to make the ToastComponent available
    //   imports: [Toasmo],
    //   // Provide the ToastService
    //   providers: [ToastService],
    // }),
    applicationConfig({
      providers: [
        importProvidersFrom(BrowserAnimationsModule),
      ],
    }),
  ],
};

export default meta;
type Story = StoryObj<ToastComponent>;
// const toastService: ToastService = argTypes.toastService;

// export const Template: Story = {

//   return {
//     props: args,
//     template: `
//       <button (click)="showSuccess()">Show Success Toast</button>
//       <button (click)="showError()">Show Error Toast</button>
//     `,
//     // Define methods to show different types of toasts
//     showSuccess() {
//       toastService.showToast('Success message', 'success');
//     },
//     showError() {
//       toastService.showToast('Error message', 'error');
//     },
//   };
// };


export const Default: Story = {
  args: {
  },
};


