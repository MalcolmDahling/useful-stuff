import { sprinkles } from '@/styles/sprinkles.css';
import { recipe } from '@vanilla-extract/recipes';

export const CardContainerWrapperStyle = recipe({
  base: [
    sprinkles({
      transition: 'all500ms',
    }),
  ],

  variants: {
    overflowHidden: {
      true: {
        overflow: 'hidden',
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
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gridAutoRows: 'auto',
    },
  ],
});
