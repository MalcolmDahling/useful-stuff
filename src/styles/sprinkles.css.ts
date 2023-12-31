import { fontFace } from '@vanilla-extract/css';
import { defineProperties } from '@vanilla-extract/sprinkles';
import { createSprinkles } from '@vanilla-extract/sprinkles/createRuntimeSprinkles';

export const breakpoints = {
  mobile: 0,
  tablet: 768,
  desktop: 1024,
};

export const fonts = {
  quicksand: fontFace({ src: 'url("/fonts/Quicksand-VariableFont_wght.ttf")' }),
};

export const colors = {
  black: 'rgb(0,0,0)',
  chaosBlack: 'rgb(15, 15, 15)',
  eerieBlack: 'rgb(26, 26, 26)',
  carbonFiber: 'rgb(46, 46, 46)',

  white: 'rgb(255, 255, 255)',

  purple: 'rgb(121, 44, 216)',
};

export const mediaSizes = {
  mobile: 'screen and (max-width: 480px)',
  tablet: 'screen and (max-width: 768px)',
  desktop: 'screen and (min-width: 1024px)',
};

const space = {
  0: 0,
  small: 4,
  medium: 8,
  large: 16,
  xl: 20,
};

const responsiveProperties = defineProperties({
  properties: {
    fontFamily: {
      quicksand: fonts.quicksand,
    },

    fontSize: {
      paragraph: 16,
      smallHeading: 20,
      heading: 30,
    },

    padding: space,
    paddingTop: space,
    paddingRight: space,
    paddingBottom: space,
    paddingLeft: space,

    margin: space,
    marginTop: space,
    marginRight: space,
    marginBottom: space,
    marginLeft: space,

    gap: space,

    border: {
      px1: '1px solid',
    },
    borderColor: colors,

    transition: {
      all200ms: 'all 200ms',
      all350ms: 'all 350ms',
      all500ms: 'all 500ms',
    },

    cursor: {
      pointer: 'pointer',
    },
  },
});

const colorProperties = defineProperties({
  properties: {
    color: colors,
    background: colors,
  },
});

export const sprinkles = createSprinkles(responsiveProperties, colorProperties);
export type Sprinkles = Parameters<typeof sprinkles>[0];
