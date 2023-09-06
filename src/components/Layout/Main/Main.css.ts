import { sprinkles } from '@/styles/sprinkles.css';
import { recipe } from '@vanilla-extract/recipes';

export const MainStyle = recipe({
  base: [
    sprinkles({
      padding: 'large',
      background: 'carbonFiber',
    }),
  ],
});
