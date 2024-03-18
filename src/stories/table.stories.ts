import { applicationConfig, moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TableComponent } from 'src/app/components/table/table.component';

const meta: Meta<TableComponent> = {
  title: 'Data-Display-Components/Table',
  component: TableComponent,
  tags: ['autodocs'],
  decorators: [

    moduleMetadata({
      declarations: [TableComponent],
    }),
    applicationConfig({
      providers: [
        importProvidersFrom(BrowserAnimationsModule),
      ],
    }),
  ],
};

export default meta;
type Story = StoryObj<TableComponent>;

export const Default: Story = {
  args: {
    columns: [
      { key: 'id', title: 'ID', dataIndex: 'id', width: 100 },
      { key: 'name', title: 'Name', dataIndex: 'name', width: 200 },
      { key: 'age', title: 'Age', dataIndex: 'age', width: 100, fixed: true },
    ],
    dataSource: [
      { id: 1, name: 'John Doe', age: 30 },
      { id: 2, name: 'Jane Doe', age: 25 }
      // Add more data as needed
    ],
  },
};


