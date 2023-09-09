import { sprinkles } from '@/styles/sprinkles.css';
import { recipe } from '@vanilla-extract/recipes';

export const NpmLogoStyle = recipe({
  base: [
    sprinkles({
      transition: 'all200ms',
    }),
    {
      opacity: 0.5,

      selectors: {
        '&:hover': {
          opacity: 1,
        },
      },
    },
  ],
});
