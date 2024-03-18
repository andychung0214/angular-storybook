import { Component, Input } from '@angular/core';

interface TableColumn {
  key: string;
  title: string;
  width?: number;
  fixed?: boolean;
  dataIndex?: string;
  render?: (data: any) => any;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() columns: TableColumn[] = [];
  @Input() dataSource: any[] = [];
}
