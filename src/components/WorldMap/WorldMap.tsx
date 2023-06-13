import {
  ComponentsOverrides,
  ComponentsProps,
  ComponentsVariants,
  Stack,
  SvgIcon,
  SvgIconProps,
  Tooltip,
  TooltipProps,
  unstable_composeClasses as composeClasses,
  generateUtilityClass,
  generateUtilityClasses,
  useThemeProps,
} from '@mui/material';
import { RawTimeZone } from '@vvo/tzdb';
import clsx from 'clsx';
import { geoPath } from 'd3-geo';
import * as GeoJSON from 'geojson';
import {
  Fragment,
  ReactNode,
  SVGAttributes,
  forwardRef,
  useMemo,
  useState,
} from 'react';
import * as topojson from 'topojson-client';
import { Topology } from 'topojson-specification';

import { CountryCode } from '../../models/Countries';
import CountryFieldValue from '../CountryFieldValue';
import FieldValueDisplay from '../FieldValueDisplay';
import timezoneTopoJson from './assets/timezones.json';
import { findTimeZone } from './utils';

export interface WorldMapClasses {
  /** Styles applied to the root element. */
  root: string;
}

export type WorldMapClassKey = keyof WorldMapClasses;

// Adding theme prop types
declare module '@mui/material/styles/props' {
  interface ComponentsPropsList {
    MuiWorldMap: WorldMapProps;
  }
}

// Adding theme override types
declare module '@mui/material/styles/overrides' {
  interface ComponentNameToClassKey {
    MuiWorldMap: keyof WorldMapClasses;
  }
}

// Adding theme component types
declare module '@mui/material/styles/components' {
  interface Components<Theme = unknown> {
    MuiWorldMap?: {
      defaultProps?: ComponentsProps['MuiWorldMap'];
      styleOverrides?: ComponentsOverrides<Theme>['MuiWorldMap'];
      variants?: ComponentsVariants['MuiWorldMap'];
    };
  }
}

type PolygonFeature = GeoJSON.Feature<
  GeoJSON.Polygon,
  GeoJSON.GeoJsonProperties
>;

export type CountriesProps = Record<
  CountryCode,
  SVGAttributes<any> & {
    tooltipContent?: ReactNode | ((timeZone: RawTimeZone) => ReactNode);
  }
>;

export interface WorldMapProps extends Partial<SvgIconProps> {
  getCountryTooltipContent?: (timeZone: RawTimeZone) => ReactNode;
  TooltipProps?: Partial<TooltipProps>;
  BaseCountryPathProps?: SVGAttributes<any>;
  CountriesProps?: CountriesProps;
}

export function getWorldMapUtilityClass(slot: string): string {
  return generateUtilityClass('MuiWorldMap', slot);
}

export const worldMapClasses: WorldMapClasses = generateUtilityClasses(
  'MuiWorldMap',
  ['root']
);

const slots = {
  root: ['root'],
};

export const WorldMap = forwardRef<SVGSVGElement, WorldMapProps>(
  function WorldMap(inProps, ref) {
    const props = useThemeProps({ props: inProps, name: 'MuiWorldMap' });
    const {
      className,
      sx,
      getCountryTooltipContent,
      BaseCountryPathProps,
      CountriesProps,
      TooltipProps,
      ...rest
    } = props;

    const classes = composeClasses(
      slots,
      getWorldMapUtilityClass,
      (() => {
        if (className) {
          return {
            root: className,
          };
        }
      })()
    );

    const [selectedTimeZone, setSelectedTimeZone] = useState<
      RawTimeZone | undefined
    >();
    const [highlightedTimeZone, setHighlightedTimeZone] = useState<
      RawTimeZone | undefined
    >();

    const pathGenerator = geoPath();
    const timeZonePolygonFeatures = useMemo(() => {
      const tzData: Topology = timezoneTopoJson as unknown as Topology;
      const tzDataFeature = topojson.feature(tzData, tzData.objects.timezones);
      const features = (tzDataFeature as { features: PolygonFeature[] })
        .features;
      return features;
    }, []);

    const tzPaths = timeZonePolygonFeatures.map((d: PolygonFeature) => {
      const id = `${d.properties?.id}`;
      // Time zone corresponding to the polygon.
      const timeZone = findTimeZone(id);
      const { fill, opacity, stroke } = (() => {
        if (timeZone) {
          if (selectedTimeZone === timeZone) {
            return {
              opacity: 1.0,
              stroke: 'darkgrey',
              fill: 'darkgrey',
            };
          } else if (highlightedTimeZone === timeZone) {
            return {
              opacity: 0.75,
              stroke: 'darkgrey',
              fill: 'darkgrey',
            };
          } else if (
            selectedTimeZone?.rawOffsetInMinutes === timeZone.rawOffsetInMinutes
          ) {
            return {
              opacity: 0.7,
              stroke: 'grey',
              fill: 'lightgrey',
            };
          } else if (
            highlightedTimeZone?.rawOffsetInMinutes ===
            timeZone.rawOffsetInMinutes
          ) {
            return {
              opacity: 0.6,
              stroke: 'grey',
              fill: 'lightgrey',
            };
          }
        }
        return {
          opacity: 0.4,
          stroke: 'lightgrey',
          fill: 'lightgrey',
        };
      })();

      const generatedPath = pathGenerator(d) || undefined;

      const { tooltipContent, ...countryPathPropsForCountry } =
        CountriesProps?.[timeZone?.countryCode as CountryCode] || {};

      const title = (() => {
        if (timeZone) {
          if (tooltipContent) {
            if (typeof tooltipContent === 'function') {
              return tooltipContent(timeZone);
            }
            return tooltipContent;
          }
          if (getCountryTooltipContent) {
            return getCountryTooltipContent(timeZone);
          }
          const { countryCode, countryName, mainCities, name, rawFormat } =
            timeZone;

          return (
            <Stack
              sx={{
                px: 2,
                py: 1,
              }}
            >
              <CountryFieldValue
                countryCode={countryCode as any}
                countryLabel={countryName}
                ContainerGridProps={{
                  alignItems: 'center',
                }}
                sx={{
                  fontSize: 24,
                }}
              />
              <FieldValueDisplay
                label="Main City:"
                value={mainCities[0]}
                direction="row"
                LabelProps={{
                  sx: {
                    fontWeight: 'bold',
                  },
                }}
              />
              <FieldValueDisplay
                label="Timezone:"
                value={`${name} (${rawFormat})`}
                direction="row"
                LabelProps={{
                  sx: {
                    fontWeight: 'bold',
                  },
                }}
              />
            </Stack>
          );
        }
      })();

      const pathNode = (
        <path
          opacity={opacity}
          fill={fill}
          strokeWidth={0.5}
          stroke={stroke}
          {...BaseCountryPathProps}
          {...countryPathPropsForCountry}
          id={id}
          data-testid={id}
          d={generatedPath}
          onClick={(event) => {
            // We have a few "unresolved" areas on map. We ignore clicking on those areas.
            setSelectedTimeZone(findTimeZone((event.target as any).id));
          }}
          onMouseEnter={(event) => {
            // We have a few "unresolved" areas on map. We ignore clicking on those areas.
            setHighlightedTimeZone(findTimeZone((event.target as any).id));
          }}
        />
      );

      if (title) {
        return (
          <Tooltip
            PopperProps={{
              sx: {
                // pointerEvents: 'none',
              },
            }}
            {...TooltipProps}
            componentsProps={{
              tooltip: {
                sx: {
                  p: 0,
                  maxWidth: 'none',
                },
              },
            }}
            title={title}
            key={id}
          >
            {pathNode}
          </Tooltip>
        );
      }

      return <Fragment key={id}>{pathNode}</Fragment>;
    });

    return (
      <SvgIcon
        ref={ref}
        {...rest}
        className={clsx(classes.root)}
        viewBox="0 0 800 320"
        onMouseLeave={() => {
          setHighlightedTimeZone(undefined);
        }}
        onMouseMove={(event) => {
          if ((event.target as any).tagName.match(/svg/i)) {
            setHighlightedTimeZone(undefined);
          }
        }}
        sx={{
          height: 'auto',
          ...sx,
        }}
      >
        <g style={{ cursor: 'pointer' }} transform="matrix(2 0 0 -2 400 200)">
          {tzPaths}
        </g>
      </SvgIcon>
    );
  }
);

export default WorldMap;
