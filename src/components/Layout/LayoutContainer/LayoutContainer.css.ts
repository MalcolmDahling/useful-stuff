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
    {
      maxWidth: 1000,
      margin: 'auto',

      boxShadow: '5px 5px 5px 5px rgba(0,0,0,0.25)',
    },
  ],
});
