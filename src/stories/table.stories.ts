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


const columns: { key: string; title: string; dataIndex: string; width: number; fixed?: boolean; }[] = [
  { key: 'id', title: 'ID', dataIndex: 'id', width: 100 },
  { key: 'name', title: 'Name', dataIndex: 'name', width: 200 },
  { key: 'age', title: 'Age', dataIndex: 'age', width: 100, fixed: true },
  { key: 'address', title: 'Address', dataIndex: 'address', width: 100, fixed: true },
];

const dataSource: any[] = [
  { id: 1, name: 'John Brown', age: 32, address:'	New York No. 1 Lake Park' },
  { id: 2, name: 'Jim Green', age: 42, address:'London No. 1 Lake Park' },
  { id: 3, name: 'Joe Black', age: 32, address:'Sidney No. 1 Lake Park' }
  // Add more data as needed
];

export default meta;
type Story = StoryObj<TableComponent>;



export const Default: Story = {
  args: {
    columns,
    dataSource,
  },
};

export const AntdStyledTable: Story = {
  args: {
    columns,
    dataSource,
  },
};

export const StickyColumn: Story = {
  args: {
    ...columns.map((column, index) => {
      if (index === 0) {
        return {
          ...column,
          fixed: true
        };
      }
      return column;
    }),
    dataSource,
  },
};

export const CustomContent: Story = {

  args: {
    columns: [
      ...columns,
      {
        title: '操作',
        dataIndex: 'actions',
        key: 'actions',
        render: () => (
          `<button themeColor="secondary">
            <span>刪除</span>
          </button>`
        ),
      },
    ],
    dataSource,
  },
};


