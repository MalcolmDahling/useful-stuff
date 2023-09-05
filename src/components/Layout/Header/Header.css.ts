import { sprinkles } from '@/sprinkles.css';
import { recipe } from '@vanilla-extract/recipes';

export const HeaderStyle = recipe({
  base: [
    sprinkles({
      background: 'eerieBlack',
    }),
    {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  ],
});
