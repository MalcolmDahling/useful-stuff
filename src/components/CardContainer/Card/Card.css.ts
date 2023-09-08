import { colors, sprinkles } from '@/styles/sprinkles.css';
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

      border: '2px solid transparent',
      borderBottom: `2px solid ${colors.purple}`,

      selectors: {
        '&:hover': {
          zIndex: 1000,
          border: `2px solid ${colors.purple}`,
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

export const CardTopContainerFlexStyle = recipe({
  base: [
    {
      display: 'grid',
      gridTemplateColumns: '1fr 54px',
      gap: 20,
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
      fontWeight: 'normal',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  ],
});

export const CardLinkStyle = recipe({
  base: [
    {
      textDecoration: 'none',
      overflow: 'hidden',
    },
  ],

  variants: {
    fullWidth: {
      true: {
        width: '100%',

        selectors: {
          '&:hover': {
            textDecoration: 'underline',
          },
        },
      },
    },
  },
});

export const CardBottomContainerStyle = recipe({
  base: [
    sprinkles({
      gap: 'large',

      padding: 'large',
      background: 'chaosBlack',
      transition: 'all200ms',
    }),
    {
      marginLeft: -2,
      marginRight: -2,

      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',

      borderLeft: '2px solid transparent',
      borderRight: '2px solid transparent',

      selectors: {
        [`${CardStyle()}:hover &`]: {
          zIndex: 1000,
          borderLeft: `2px solid ${colors.purple}`,
          borderRight: `2px solid ${colors.purple}`,
        },
      },
    },
  ],
});
