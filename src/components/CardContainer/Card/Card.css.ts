import { sprinkles } from '@/styles/sprinkles.css';
import { recipe } from '@vanilla-extract/recipes';

export const CardStyle = recipe({
  base: [
    sprinkles({
      padding: 'large',
      background: 'eerieBlack',
    }),
    {
      minHeight: 200,

      display: 'flex',
      flexDirection: 'column',
      alignItems: 'space-between',
      gap: 10,
    },
  ],
});

export const CardTitleStyle = recipe({
  base: [
    sprinkles({
      margin: 0,

      fontSize: 'smallHeading',
    }),
    {
      flexBasis: '100%',
      textAlign: 'center',
      fontWeight: 'normal',
    },
  ],
});

export const CardLinkStyle = recipe({
  base: [
    {
      width: 56,
      textDecoration: 'none',
      overflow: 'hidden',

      selectors: {
        '&:hover': {
          textDecoration: 'underline',
        },
      },
    },
  ],
});

export const CardBottomContainerStyle = recipe({
  base: [
    sprinkles({
      gap: 'large',
    }),
    {
      width: '100%',

      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  ],
});
