import { sprinkles } from '@/styles/sprinkles.css';
import { recipe } from '@vanilla-extract/recipes';

export const RichTextParagraphStyle = recipe({
  base: [
    sprinkles({}),
    {
      marginBottom: 0,
      wordWrap: 'break-word',
    },
  ],

  variants: {
    noMargin: {
      true: {
        margin: 0,
      },
    },
  },
});
