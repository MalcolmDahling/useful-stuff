import { sprinkles } from '@/styles/sprinkles.css';
import { recipe } from '@vanilla-extract/recipes';
import { mediaSizes } from '@/styles/sprinkles.css';

export const CardContainerWrapperStyle = recipe({
  base: [
    sprinkles({}),
    {
      display: 'grid',
      overflow: 'hidden',
    },
  ],

  variants: {
    open: {
      true: {
        gridTemplateRows: '1fr',
      },
      false: {
        gridTemplateRows: '0fr',
      },
    },
  },
});

export const CardContainerStyle = recipe({
  base: [
    sprinkles({
      gap: 'xl',
      padding: 'small',
    }),
    {
      width: '100%',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(calc(33.33% - 16px), 1fr))',
      gridAutoRows: 'auto',

      '@media': {
        [mediaSizes.tablet]: {
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        },
      },
    },
  ],
});
