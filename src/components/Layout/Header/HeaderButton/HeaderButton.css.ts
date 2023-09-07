import { colors, sprinkles } from '@/styles/sprinkles.css';
import { recipe } from '@vanilla-extract/recipes';
import { mediaSizes } from '@/styles/sprinkles.css';

export const HeaderButtonStyle = recipe({
  base: [
    sprinkles({
      fontSize: 'paragraph',
      transition: 'all200ms',
      cursor: 'pointer',
    }),
    {
      width: '100%',
      height: 80,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',

      border: 'none',

      selectors: {
        '&:hover': {
          background: colors.carbonFiber,
          opacity: 1,
        },
      },
    },

    {
      '@media': {
        [mediaSizes.mobile]: {
          padding: 0,
        },
      },
    },
  ],

  variants: {
    selected: {
      true: {
        opacity: 1,
        background: colors.carbonFiber,
      },
      false: {
        opacity: 0.5,
        background: colors.eerieBlack,
      },
    },
  },
});

export const HeaderButtonLogoStyle = recipe({
  base: [
    sprinkles({
      transition: 'all200ms',
    }),
    {
      position: 'relative',

      selectors: {
        [`${HeaderButtonStyle()}:hover &`]: {
          top: '0%',
          translate: '0% 0%',
        },
      },
    },
  ],

  variants: {
    selected: {
      true: {
        translate: '0% 0%',
        color: colors.white,
      },
      false: {
        translate: '0% 25%',
        color: colors.white,
      },
    },
  },
});

export const HeaderButtonTitleStyle = recipe({
  base: [
    sprinkles({ transition: 'all200ms' }),
    {
      margin: 0,
      opacity: 0,

      selectors: {
        [`${HeaderButtonStyle()}:hover &`]: {
          opacity: 1,
        },
      },
    },

    {
      '@media': {
        [mediaSizes.mobile]: {
          fontSize: '14px',
        },
      },
    },
  ],

  variants: {
    selected: {
      true: {
        opacity: 1,
      },
      false: {
        opacity: 0,
      },
    },
  },
});
