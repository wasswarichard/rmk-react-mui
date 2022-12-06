import {
  TableRowProps as MuiTableRowProps,
  SxProps,
  Theme,
  TypographyProps,
} from '@mui/material';
import { TableCellProps } from '@mui/material/TableCell';
import { ReactNode } from 'react';

import { EllipsisMenuIconButtonProps } from '../components/EllipsisMenuIconButton';
import { DropdownOption, PrimitiveDataType } from './Utils';

export type TableColumnEnumValue =
  | {
      id: string;
      label: string;
    }
  | string;

export type TableColumnType =
  | PrimitiveDataType
  | 'checkbox'
  | 'currency'
  | 'currencyInput'
  | 'dateInput'
  | 'dateTime'
  | 'dropdownInput'
  | 'id'
  | 'input'
  | 'numberInput'
  | 'percentage'
  | 'percentageInput'
  | 'phoneNumber'
  | 'phonenumberInput'
  | 'rowAdder'
  | 'time'
  | 'email'
  | 'tool'
  | 'ellipsisMenuTool';

export type GetColumnValue<
  RowObject = any,
  ColumnType extends TableColumnType = TableColumnType
> = (
  row: RowObject,
  column: TableColumn<RowObject, ColumnType>
) => ColumnType extends 'ellipsisMenuTool'
  ? EllipsisMenuIconButtonProps
  : ReactNode;

export interface TableColumn<
  RowObject = any,
  ColumnType extends TableColumnType = TableColumnType
> extends Partial<Omit<TableCellProps, 'defaultValue' | 'id'>>,
    Partial<Pick<DropdownOption, 'label' | 'searchableLabel' | 'description'>> {
  id: keyof RowObject;
  type?: ColumnType;
  align?: 'left' | 'center' | 'right';
  width?: number;
  minWidth?: number;
  noHeaderTextSuffix?: boolean;
  headerTextSuffix?: ReactNode;
  enumValues?: TableColumnEnumValue[];
  searchKeyMapper?: (displayingColumnValue: string) => any;
  columnClassName?: string;
  locked?: boolean;
  defaultColumnValue?: ReactNode;
  getColumnValue?: GetColumnValue<RowObject, ColumnType>;
  onClickColumn?: (currentEntity: RowObject) => void;
  headerSx?: SxProps<Theme>;
  bodySx?: SxProps<Theme>;
  sortable?: boolean;
  opaque?: boolean;
  propagateClickToParentRowClickEvent?: boolean;
  columnTypographyProps?: Partial<TypographyProps>;
  decimalPlaces?: number;
  textTransform?: boolean;
  showHeaderText?: boolean;
  editable?: boolean;
}

export interface ForEachDerivedColumnConfiguration<T> {
  key: string;
  currentEntity: T;
}

export type GetRowProps<T = any> = (currentEntity: T) => MuiTableRowProps;

export interface BaseTableRow {
  id: string | number;
}

export interface TableRowProps<RowObject = any>
  extends Pick<
    TableColumn<RowObject>,
    | 'decimalPlaces'
    | 'columnTypographyProps'
    | 'editable'
    | 'opaque'
    | 'textTransform'
    | 'defaultColumnValue'
  > {
  columns: Array<TableColumn<RowObject>>;
  row: RowObject;
  generateRowData?: (currentEntity: RowObject) => any;
  getRowProps?: GetRowProps;
  onClickRow?: (currentEntity: RowObject) => void;
  minColumnWidth?: number;
}
