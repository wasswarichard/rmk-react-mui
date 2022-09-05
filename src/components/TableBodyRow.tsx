import Box from '@mui/material/Box';
import TableCell from '@mui/material/TableCell';
import TableRow, { TableRowProps } from '@mui/material/TableRow';
import { format } from 'date-fns';
import { FC, isValidElement, useEffect, useMemo, useRef } from 'react';

import { ITableRowProps } from '../interfaces/Table';
import { formatDate } from '../utils/dates';
import { addThousandCommas } from '../utils/numbers';
import { getColumnWidthStyles } from '../utils/Table';

const allowedDataTypes = ['number', 'string', 'boolean'];

const toolTypes = [
  'tool',
  'input',
  'currencyInput',
  'selectInput',
  'dateInput',
  'phoneInput',
  'rowAdder',
  'percentageInput',
  'numberInput',
  'fragment',
  'checkbox',
];

export interface ITableBodyRowProps<T = any>
  extends Partial<TableRowProps>,
    ITableRowProps<T> {}

export const TableBodyRow: FC<ITableBodyRowProps> = ({
  columns,
  row,
  forEachDerivedColumn,
  getRowProps,
  generateRowData,
  decimalPlaces,
  labelTransform,
  onClickRow,
  sx,
  ...rest
}) => {
  const forEachDerivedColumnRef = useRef(forEachDerivedColumn);
  const getRowPropsRef = useRef(getRowProps);
  const generateRowDataRef = useRef(generateRowData);

  useEffect(() => {
    forEachDerivedColumnRef.current = forEachDerivedColumn;
    getRowPropsRef.current = getRowProps;
    generateRowDataRef.current = generateRowData;
  }, [forEachDerivedColumn, generateRowData, getRowProps]);

  const formattedRow = useMemo(() => {
    return {
      ...columns.reduce(
        (accumulator, column) => {
          const { type, id, defaultValue, postProcessor, isDerivedColumn } =
            column;
          let columnValue = (() => {
            if (isDerivedColumn && forEachDerivedColumnRef.current) {
              return forEachDerivedColumnRef.current({
                key: id,
                currentEntity: row,
              });
            }
            return row[id];
          })();
          if (type && toolTypes.includes(type)) {
            switch (type) {
              case 'input':
                // TODO: Implment this
                break;
              case 'currencyInput':
                // TODO: Implment this
                break;
              case 'percentageInput':
                // TODO: Implment this
                break;
              case 'numberInput':
                // TODO: Implment this
                break;
              case 'dropdownInput':
                // TODO: Implment this
                break;
              case 'dateInput':
                // TODO: Implment this
                break;
              case 'phonenumberInput':
                // TODO: Implment this
                break;
              case 'rowAdder':
                // TODO: Implment this
                break;
              case 'checkbox':
                // TODO: Implment this
                break;
            }
          } else if (allowedDataTypes.includes(typeof columnValue)) {
            switch (type) {
              case 'date':
                columnValue = formatDate(columnValue);
                break;
              case 'dateTime':
                columnValue = formatDate(columnValue, true);
                break;
              case 'time':
                const date = new Date(columnValue);
                columnValue = isNaN(date.getTime())
                  ? ''
                  : format(date, 'hh:mm aa');
                break;
              case 'currency':
              case 'percentage':
                columnValue = parseFloat(columnValue);
                columnValue = addThousandCommas(
                  columnValue,
                  decimalPlaces || true
                );
                break;
              case 'number':
                columnValue = addThousandCommas(columnValue);
                break;
              case 'phoneNumber':
                // TODO: Implement this
                break;
              case 'enum':
                if (labelTransform !== false) {
                  columnValue = String(columnValue).toTitleCase(true);
                }
                break;
              case 'boolean':
                columnValue = columnValue ? 'Yes' : 'No';
                break;
            }
          } else if (!columnValue) {
            columnValue = defaultValue || <>&nbsp;</>;
          }
          if (postProcessor) {
            columnValue = postProcessor(columnValue, row, column);
          }
          accumulator[id] = columnValue;
          return accumulator;
        },
        {
          currentEntity: row,
          rowProps: (() => {
            if (getRowPropsRef.current) {
              return getRowPropsRef.current(row);
            }
            return {};
          })(),
        } as Record<string, TableRowProps>
      ),
      ...(() => {
        if (generateRowDataRef.current) {
          return generateRowDataRef.current(row);
        }
        return {};
      })(),
    };
  }, [columns, decimalPlaces, labelTransform, row]);

  const { sx: rowPropsSx, ...restRowProps }: any = formattedRow.rowProps;
  return (
    <TableRow
      {...restRowProps}
      {...rest}
      tabIndex={-1}
      hover
      onClick={() => {
        onClickRow && onClickRow(formattedRow.currentEntity);
      }}
      sx={{
        verticalAlign: 'top',
        cursor: onClickRow ? 'pointer' : 'inherit',
        ...rowPropsSx,
        ...sx,
      }}
    >
      {columns.map((column) => {
        const {
          id,
          align = 'left',
          sx,
          style,
          onClick,
          onClickColumn,
        } = column;
        const columnValue = formattedRow[column.id];
        return (
          <TableCell
            key={id}
            {...{ style }}
            onClick={(event) => {
              onClickColumn && onClickColumn(formattedRow.currentEntity);
              onClick && onClick(event);
            }}
            align={align}
            sx={{
              py: 1.8,
              px: 3,
              cursor: onClickColumn ? 'pointer' : 'inherit',
              ...getColumnWidthStyles(column),
              ...sx,
            }}
          >
            {(() => {
              if (isValidElement(columnValue)) {
                return (
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems={
                      ({ left: 'start', right: 'end' } as any)[align] || align
                    }
                  >
                    {columnValue}
                  </Box>
                );
              }
              return columnValue;
            })()}
          </TableCell>
        );
      })}
    </TableRow>
  );
};

export default TableBodyRow;