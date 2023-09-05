import { recipe } from '@vanilla-extract/recipes';

export const LayoutContainerStyle = recipe({
  base: [
    {
      maxWidth: 1000,
      margin: 'auto',

      boxShadow: '5px 5px 5px 5px rgba(0,0,0,0.25)',
    },
  ],
});
