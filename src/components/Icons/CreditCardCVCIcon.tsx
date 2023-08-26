import {
  ComponentsOverrides,
  ComponentsProps,
  ComponentsVariants,
  SvgIcon,
  SvgIconProps,
  unstable_composeClasses as composeClasses,
  generateUtilityClass,
  generateUtilityClasses,
  useThemeProps,
} from '@mui/material';
import clsx from 'clsx';
import { forwardRef } from 'react';

export interface CreditCardCVCIconClasses {
  /** Styles applied to the root element. */
  root: string;
}

export type CreditCardCVCIconClassKey = keyof CreditCardCVCIconClasses;

//#region Adding theme prop types
declare module '@mui/material/styles/props' {
  interface ComponentsPropsList {
    MuiCreditCardCVCIcon: CreditCardCVCIconProps;
  }
}
//#endregion

//#region Adding theme override types
declare module '@mui/material/styles/overrides' {
  interface ComponentNameToClassKey {
    MuiCreditCardCVCIcon: keyof CreditCardCVCIconClasses;
  }
}
//#endregion

//#region Adding theme component types
declare module '@mui/material/styles/components' {
  interface Components<Theme = unknown> {
    MuiCreditCardCVCIcon?: {
      defaultProps?: ComponentsProps['MuiCreditCardCVCIcon'];
      styleOverrides?: ComponentsOverrides<Theme>['MuiCreditCardCVCIcon'];
      variants?: ComponentsVariants['MuiCreditCardCVCIcon'];
    };
  }
}
//#endregion

export const getCreditCardCVCIconUtilityClass = (slot: string) => {
  return generateUtilityClass('MuiCreditCardCVCIcon', slot);
};

const slots: Record<CreditCardCVCIconClassKey, [CreditCardCVCIconClassKey]> = {
  root: ['root'],
};

export const creditCardCVCIconClasses: CreditCardCVCIconClasses =
  generateUtilityClasses(
    'MuiCreditCardCVCIcon',
    Object.keys(slots) as CreditCardCVCIconClassKey[]
  );

export interface CreditCardCVCIconProps extends SvgIconProps {}

export const CreditCardCVCIcon = forwardRef<
  SVGSVGElement,
  CreditCardCVCIconProps
>(function CreditCardCVCIcon(inProps, ref) {
  const props = useThemeProps({ props: inProps, name: 'MuiCreditCardCVCIcon' });
  const { className, ...rest } = props;

  const classes = composeClasses(
    slots,
    getCreditCardCVCIconUtilityClass,
    (() => {
      if (className) {
        return {
          root: className,
        };
      }
    })()
  );

  return (
    <SvgIcon
      ref={ref}
      {...rest}
      className={clsx(classes.root)}
      viewBox="0 0 27 18"
    >
      <path
        d="M27 4.00001V3.37501C27 2.4799 26.6444 1.62146 26.0115 0.988518C25.3786 0.355581 24.5201 0 23.625 0H3.375C2.47989 0 1.62145 0.355581 0.988514 0.988518C0.355579 1.62146 0 2.4799 0 3.37501V4.00001H27Z"
        fill="#E6E9EB"
      ></path>
      <path
        d="M0 6.99994V14.6666C0 15.5507 0.355579 16.3985 0.988514 17.0237C1.62145 17.6488 2.47989 18 3.375 18H23.625C24.5201 18 25.3786 17.6488 26.0115 17.0237C26.6444 16.3985 27 15.5507 27 14.6666V6.99994H0Z"
        fill="#E6E9EB"
      ></path>
      <rect y="4.00012" width="27" height="3.00001" fill="#687282"></rect>
      <path
        d="M4 11C4 10.4477 4.44772 10 5 10H21C22.1046 10 23 10.8954 23 12C23 13.1046 22.1046 14 21 14H5C4.44771 14 4 13.5523 4 13V11Z"
        fill="white"
      ></path>
      <rect
        x="16.5"
        y="9.5"
        width="7"
        height="5"
        rx="2.5"
        fill="#fff"
        stroke="#D10244"
      ></rect>
    </SvgIcon>
  );
});

export default CreditCardCVCIcon;
