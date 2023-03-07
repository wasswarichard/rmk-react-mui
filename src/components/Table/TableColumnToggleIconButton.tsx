import AddIcon from '@mui/icons-material/Add';
import {
  ComponentsOverrides,
  ComponentsProps,
  ComponentsVariants,
  unstable_composeClasses as composeClasses,
  generateUtilityClass,
  generateUtilityClasses,
  useThemeProps,
} from '@mui/material';
import clsx from 'clsx';
import { ReactElement, Ref, forwardRef } from 'react';

import { DropdownOption } from '../../interfaces/Utils';
import EllipsisMenuIconButton, {
  EllipsisMenuIconButtonProps,
} from '../EllipsisMenuIconButton';
import { BaseDataRow, TableColumn } from './interfaces';

export interface TableColumnToggleIconButtonClasses {
  /** Styles applied to the root element. */
  root: string;
}

export type TableColumnToggleIconButtonClassKey =
  keyof TableColumnToggleIconButtonClasses;

// Adding theme prop types
declare module '@mui/material/styles/props' {
  interface ComponentsPropsList {
    MuiTableColumnToggleIconButton: TableColumnToggleIconButtonProps;
  }
}

// Adding theme override types
declare module '@mui/material/styles/overrides' {
  interface ComponentNameToClassKey {
    MuiTableColumnToggleIconButton: keyof TableColumnToggleIconButtonClasses;
  }
}

// Adding theme component types
declare module '@mui/material/styles/components' {
  interface Components<Theme = unknown> {
    MuiTableColumnToggleIconButton?: {
      defaultProps?: ComponentsProps['MuiTableColumnToggleIconButton'];
      styleOverrides?: ComponentsOverrides<Theme>['MuiTableColumnToggleIconButton'];
      variants?: ComponentsVariants['MuiTableColumnToggleIconButton'];
    };
  }
}

export interface TableColumnToggleIconButtonProps<DataRow = BaseDataRow>
  extends Partial<Omit<EllipsisMenuIconButtonProps, 'options'>> {
  columns: TableColumn[];
  selectedColumnIds: (keyof DataRow)[];
  onChangeSelectedColumnIds?: (selectedColumnIds: (keyof DataRow)[]) => void;
}

export function getTableColumnToggleIconButtonUtilityClass(
  slot: string
): string {
  return generateUtilityClass('MuiTableColumnToggleIconButton', slot);
}

export const tableColumnToggleIconButtonClasses: TableColumnToggleIconButtonClasses =
  generateUtilityClasses('MuiTableColumnToggleIconButton', ['root']);

const slots = {
  root: ['root'],
};

const BaseTableColumnToggleIconButton = <DataRow extends BaseDataRow>(
  inProps: TableColumnToggleIconButtonProps<DataRow>,
  ref: Ref<HTMLButtonElement>
) => {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiTableColumnToggleIconButton',
  });
  const {
    className,
    columns,
    selectedColumnIds,
    onChangeSelectedColumnIds,
    PaginatedDropdownOptionListProps,
    ...rest
  } = props;

  const classes = composeClasses(
    slots,
    getTableColumnToggleIconButtonUtilityClass,
    (() => {
      if (className) {
        return {
          root: className,
        };
      }
    })()
  );

  const options = (() => {
    return columns.map(({ id, label, searchableLabel, locked }) => {
      const isColumnSelected = selectedColumnIds.includes(id as any);
      return {
        value: id,
        label: searchableLabel || label,
        searchableLabel,
        selectable:
          !locked && (!isColumnSelected || selectedColumnIds.length > 2),
      } as DropdownOption;
    });
  })();

  return (
    <EllipsisMenuIconButton
      ref={ref}
      {...rest}
      {...{ options }}
      className={clsx(classes.root)}
      PaginatedDropdownOptionListProps={{
        searchable: true,
        optionVariant: 'checkbox',
        ...PaginatedDropdownOptionListProps,
        selectedOptions: options.filter(({ value }) => {
          return selectedColumnIds.includes(String(value) as any);
        }),
        onChangeSelectedOptions: (selectedOptions) => {
          onChangeSelectedColumnIds &&
            onChangeSelectedColumnIds(
              selectedOptions.map(({ value }) => String(value) as any)
            );
        },
        multiple: true,
      }}
      closeOnSelectOption={false}
    >
      <AddIcon />
    </EllipsisMenuIconButton>
  );
};

export const TableColumnToggleIconButton = forwardRef(
  BaseTableColumnToggleIconButton
) as <DataRow extends BaseDataRow>(
  p: TableColumnToggleIconButtonProps<DataRow> & {
    ref?: Ref<HTMLButtonElement>;
  }
) => ReactElement;

export default TableColumnToggleIconButton;
