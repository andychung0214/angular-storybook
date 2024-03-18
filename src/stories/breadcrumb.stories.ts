import { PlacementStyle } from './../app/components/badge/placement-style.util';
import { applicationConfig, type Meta, type StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { moduleMetadata } from '@storybook/angular';
import { BreadcrumbItemComponent } from 'src/app/components/breadcrumb-item/breadcrumb-item.component';
import { BreadcrumbComponent } from 'src/app/components/breadcrumb/breadcrumb.component';
import { BreadcrumbsComponent } from 'src/app/components/breadcrumbs/breadcrumbs.component';

const meta: Meta<BreadcrumbComponent> =  {
  title: 'Data-Input-Components/ButtonOld',
  component: BreadcrumbComponent,
  tags: ['autodocs'],

  decorators: [
    moduleMetadata({
      declarations: [BreadcrumbComponent, BreadcrumbsComponent, BreadcrumbItemComponent],
    }),
    applicationConfig({
      providers: [
        importProvidersFrom(BrowserAnimationsModule),
        // 添加其他全局模块或服务
      ],
    }),
  ],
};


export default meta;
type Story = StoryObj<BreadcrumbComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {

  routes: [
    { label: 'Home', to: '/' },
    { label: 'Catalog', to: '/catalog' },
    { label: 'Product', to: '/catalog/product' }
  ],
  maxItems: 3,
  separator: '>',
  },
};

// export const TopRight : Story = {
//   args: {

//     placement: 'top-right',
//   },
// };

// export const BottomLeft  : Story = {
//   args: {

//     content: '99+',
//   placement: 'bottom-left',
//   },
// };
