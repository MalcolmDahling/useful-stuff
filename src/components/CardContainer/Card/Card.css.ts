import { sprinkles } from '@/styles/sprinkles.css';
import { recipe } from '@vanilla-extract/recipes';

export const CardStyle = recipe({
  base: [
    sprinkles({
      background: 'eerieBlack',
      transition: 'all200ms',
    }),
    {
      minHeight: 200,

      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      gap: 10,

      border: '1px solid transparent',

      selectors: {
        '&:hover': {
          zIndex: 1000,
          border: `1px solid rgba(255,255,255,0.5)`,
        },
      },
    },
  ],
});

export const CardTopContainerStyle = recipe({
  base: [
    sprinkles({
      padding: 'large',
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
    },
  ],
});

export const CardBottomContainerStyle = recipe({
  base: [
    sprinkles({
      gap: 'large',
      padding: 'large',
      background: 'chaosBlack',
    }),
    {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  ],
});
