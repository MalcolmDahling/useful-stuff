import { colors, sprinkles } from '@/styles/sprinkles.css';
import { recipe } from '@vanilla-extract/recipes';

export const CopyCommandButtonStyle = recipe({
  base: [
    sprinkles({
      margin: 0,
      padding: 'medium',

      background: 'chaosBlack',
      fontSize: 'paragraph',
      cursor: 'pointer',
      color: 'white',
      transition: 'all200ms',
    }),
    {
      flexShrink: 1,

      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      border: 'none',

      selectors: {
        '&:hover': {
          backgroundColor: colors.carbonFiber,
        },
      },
    },
  ],
});
