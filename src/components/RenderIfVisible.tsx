import Box, { BoxProps } from '@mui/material/Box';
import { FC, ReactNode, useEffect, useRef } from 'react';
import { IntersectionOptions, useInView } from 'react-intersection-observer';

export interface DefaultPlaceholderDimensions {
  height?: number;
  width?: number;
}

export interface RenderIfVisibleProps
  extends Partial<BoxProps>,
    Partial<Pick<IntersectionOptions, 'threshold'>> {
  /**
   * Whether the element should be visible initially or not.
   * Useful e.g. for always setting the first N items to visible.
   *
   * @default false
   *
   */
  initialVisible?: boolean;
  /**
   * How far outside the viewport in pixels should elements be considered visible?
   *
   */
  visibleOffset?: number;
  /**
   * Should the element stay rendered after it becomes visible?
   *
   */
  stayRendered?: boolean;
  rootNode?: HTMLElement | null;
  /**
   * The element to render is visible
   *
   */
  children: ReactNode;
  /**
   * The default dimensions given to the placeholder element to avoid flickering.
   * Note: The placeholder dimensions will change when the element is rendered if they are different from the element dimensions
   */
  defaultPlaceholderDimensions?: DefaultPlaceholderDimensions;
  /**
   * Default width and height to be assigned to placeholder element
   *
   * @default { height: 50 }
   *
   */
  PlaceholderProps?: Partial<BoxProps>;
  /**
   * Determines if the placeholder should be displayed
   *
   * @default true
   *
   */
  displayPlaceholder?: boolean;
  /**
   * If true children elements will be rendered without a Box wrapper.
   * Note: If this property is set to true, it automatically sets stayRendered to true
   *
   * @default false
   *
   */
  unWrapChildrenIfVisible?: boolean;
  /**
   * The time to wait for idle window before displaying visible element.
   *
   * @default 600
   */
  visibilityDelay?: number;
  onChangeVisibility?: (isVisible: boolean) => void;
}

export const RenderIfVisible: FC<RenderIfVisibleProps> = ({
  initialVisible = false,
  stayRendered = false,
  children,
  defaultPlaceholderDimensions = { height: 50 },
  PlaceholderProps = {},
  unWrapChildrenIfVisible = false,
  displayPlaceholder = true,
  onChangeVisibility,
  threshold = 0,
  ...rest
}) => {
  const { sx: placeholderPropsSx, ...placeholderPropsRest } = PlaceholderProps;
  unWrapChildrenIfVisible && (stayRendered = true);

  const isMountedRef = useRef(true);
  const wasVisibleRef = useRef(initialVisible);
  const placeholderDimensionsRef = useRef(defaultPlaceholderDimensions);
  const onChangeVisibilityRef = useRef(onChangeVisibility);
  useEffect(() => {
    onChangeVisibilityRef.current = onChangeVisibility;
  }, [onChangeVisibility]);

  const { ref, inView: isVisible } = useInView({
    initialInView: initialVisible,
    threshold,
  });

  useEffect(() => {
    if (isVisible) {
      wasVisibleRef.current = true;
    }
    onChangeVisibilityRef.current && onChangeVisibilityRef.current(isVisible);
  }, [isVisible]);

  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  if (unWrapChildrenIfVisible && (isVisible || wasVisibleRef.current)) {
    return <>{children}</>;
  }

  return (
    <Box ref={ref} {...rest}>
      {(() => {
        if (
          (isVisible || (stayRendered && wasVisibleRef.current)) &&
          !unWrapChildrenIfVisible
        ) {
          return children;
        }
        if (displayPlaceholder) {
          return (
            <Box
              {...placeholderPropsRest}
              sx={{
                ...placeholderDimensionsRef.current,
                ...placeholderPropsSx,
              }}
            />
          );
        }
      })()}
    </Box>
  );
};

export default RenderIfVisible;
