import { sprinkles } from '@/styles/sprinkles.css';
import { recipe } from '@vanilla-extract/recipes';

export const CardStyle = recipe({
  base: [
    sprinkles({
      padding: 'large',
      background: 'eerieBlack',
    }),
    {},
  ],
});

export const CardTitleStyle = recipe({
  base: [
    sprinkles({
      margin: 0,

      fontSize: 'smallHeading',
    }),
    {
      textAlign: 'center',
      fontWeight: 'normal',
    },
  ],
});

export const CardLinkStyle = recipe({
  base: [
    {
      textDecoration: 'none',

      selectors: {
        '&:hover': {
          textDecoration: 'underline',
        },
      },
    },
  ],
});
