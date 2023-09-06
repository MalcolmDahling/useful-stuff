import { sprinkles } from '@/styles/sprinkles.css';
import { recipe } from '@vanilla-extract/recipes';

export const CardContainerWrapperStyle = recipe({
  base: [
    sprinkles({
      transition: 'all250ms',
    }),
    { overflow: 'hidden' },
  ],

  variants: {
    show: {
      true: {
        opacity: 1,
      },
      false: {
        opacity: 0,
      },
    },
  },
});

export const CardContainerStyle = recipe({
  base: [
    sprinkles({
      gap: 'large',
      transition: 'all250ms',
    }),
    {
      width: '100%',

      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    },
  ],
});
