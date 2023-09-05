import { colors, sprinkles } from '@/sprinkles.css';
import { recipe } from '@vanilla-extract/recipes';

export const HeaderButtonContainerStyle = recipe({
  base: {
    flexBasis: '100%',

    height: 75,
    display: 'flex',
    alignItems: 'center',
  },
});

export const HeaderButtonStyle = recipe({
  base: [
    sprinkles({
      fontSize: 'paragraph',
      transition: 'ms250',
      cursor: 'pointer',
    }),
    {
      width: '100%',
      height: '100%',
      border: 'none',

      ':hover': {
        background: colors.carbonFiber,
      },
    },
  ],

  variants: {
    selected: {
      true: {
        background: colors.carbonFiber,
      },
      false: {
        background: colors.eerieBlack,
      },
    },
  },
});

export const HeaderButtonSpacerStyle = recipe({
  base: [
    sprinkles({
      background: 'white',
    }),
    {
      width: 1,
      height: '100%',
    },
  ],
});
