import { applicationConfig, moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TabsComponent } from 'src/app/components/tabs/tabs.component';
import { TabComponent } from 'src/app/components/tab/tab.component';

const meta: Meta<TabsComponent> = {
  title: 'Nav-Components/Tabs',
  component: TabsComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      declarations: [TabComponent, TabsComponent],
    }),
    applicationConfig({
      providers: [
        importProvidersFrom(BrowserAnimationsModule),
      ],
    }),
  ],
//   template: `
//   <app-tabs>
//   <app-tab tabTitle="Tab 1" [active]="true">Content 1</app-tab>
//   <app-tab tabTitle="Tab 2">Content 2</app-tab>
//   <app-tab tabTitle="Tab 3">Content 3</app-tab>
// </app-tabs>
//     `,
};

export default meta;
type Story = StoryObj<TabsComponent>;

export const Default: Story = {
  args: {
  },
};

export const Centered: Story = {
  args: {
  },
};


export const IconTab: Story = {
  args: {
  },
};


export const ColoredTab: Story = {
  args: {
  },
};

