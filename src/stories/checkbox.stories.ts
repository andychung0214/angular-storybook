import { moduleMetadata } from '@storybook/angular';
import { CheckboxComponent } from 'src/app/components/checkbox/checkbox.component';

export default {
  title: '數據輸入元件/Checkbox',
  decorators: [
    moduleMetadata({
      declarations: [CheckboxComponent],
    }),
  ],
};

export const Default = () => ({
  component: CheckboxComponent,
  props: {
    label: 'Checkbox',
    checked: false,
  },
});

export const Checked = () => ({
  component: CheckboxComponent,
  props: {
    label: 'Checkbox',
    checked: true,
  },
});
export const Disabled = () => ({
  component: CheckboxComponent,
  props: {
    label: 'Checkbox',
    checked: false,
    disabled: true,
  },
});
