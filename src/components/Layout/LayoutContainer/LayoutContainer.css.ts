import { mediaSizes, sprinkles } from '@/styles/sprinkles.css';
import { recipe } from '@vanilla-extract/recipes';

export const BackgroundStyle = recipe({
  base: [
    {
      position: 'fixed',
      inset: 0,
      zIndex: -1,

      background: 'linear-gradient(180deg, rgba(54,10,108,1) 0%, rgba(0,0,0,1) 100%)',
    },
  ],
});

export const LayoutContainerStyle = recipe({
  base: [
    sprinkles({
      padding: 'large',
    }),
    {
      maxWidth: 1000,
      margin: 'auto',

      '@media': {
        [mediaSizes.mobile]: {
          padding: 0,
        },
      },
    },
  ],
});

export const LayoutChildrenContainerStyle = recipe({
  base: [
    {
      boxShadow: '5px 5px 5px 5px rgba(0,0,0,0.25)',
    },
  ],
});
