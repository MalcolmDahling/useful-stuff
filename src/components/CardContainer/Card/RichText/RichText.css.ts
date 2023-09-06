import { sprinkles } from '@/styles/sprinkles.css';
import { recipe } from '@vanilla-extract/recipes';

export const RichTextParagraphStyle = recipe({
  base: [
    sprinkles({
      marginBottom: 'medium',
      color: 'white',
    }),
    {},
  ],
});
