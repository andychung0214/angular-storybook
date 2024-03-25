import { Meta, moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AccordionComponent } from 'src/app/components/accordion/accordion.component';
import { AccordionHeaderComponent } from 'src/app/components/accordion-header/accordion-header.component';
import { AccordionPanelComponent } from 'src/app/components/accordion-panel/accordion-panel.component';

export default {
  title: 'Data-Display-Components/Accordion',
  component: AccordionComponent,
  decorators: [
    moduleMetadata({
      imports: [BrowserAnimationsModule],
    }),
  ],
} as Meta<AccordionComponent>;

export const Default = {
  args: {
    header: 'Header Content Here',
    isExpand: false,
    items :[
      { question: 'Who is your favorite artist?', answer: 'Leonardo da Vinci.' },
    ],
  },
  template: `
    <app-accordion
      [header]="header"
      [isExpand]="isExpand"
      (onClick)="onClick()">
      <div>Panel Content Here</div>
    </app-accordion>
  `,
  props: {
    onClick: () => console.log('Accordion header clicked'),
  },
};

export const ShowSingleAccordion = {
  args: {
    title: 'Section 1',
    header: 'Header Content Here',
    isExpand: true,
  },
  template: `
  <app-accordion title="Section 1">
  This is the content of the first section.
</app-accordion>

<app-accordion title="Section 2">
  This is the content of the second section.
</app-accordion>
  `,
  props: {
    onClick: () => console.log('Accordion header clicked'),
  },
};
