import { sprinkles } from '@/styles/sprinkles.css';
import { recipe } from '@vanilla-extract/recipes';

export const AddToCartButtonStyle = recipe({
  base: [
    sprinkles({
      padding: 0,

      fontSize: 'paragraph',
    }),
    {
      backgroundColor: 'transparent',
      border: 'none',
    },
  ],
});

export const AddToCardSvgStyle = recipe({
  base: [
    sprinkles({
      color: 'white',
      cursor: 'pointer',
      transition: 'all200ms',
    }),
    {
      opacity: 0.5,
      outline: 'none',
      selectors: {
        '&:hover': {
          opacity: 1,
        },
      },
    },
  ],

  variants: {
    checkmark: {
      true: {
        opacity: 1,
      },
    },
  },
});
