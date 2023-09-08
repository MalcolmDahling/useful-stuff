import { sprinkles } from '@/styles/sprinkles.css';
import { recipe } from '@vanilla-extract/recipes';

export const SearchContainerStyle = recipe({
  base: [
    sprinkles({
      margin: 'small',
      marginTop: 'small',
      marginBottom: 'large',
    }),
    {
      display: 'flex',
      justifyContent: 'center',
    },
  ],
});

export const SearchInputStyle = recipe({
  base: [
    sprinkles({
      padding: 'large',

      fontSize: 'paragraph',
      color: 'white',
      background: 'eerieBlack',
    }),
    {
      height: 35,
      maxWidth: 500,
      width: '100%',

      border: 'none',
      boxSizing: 'border-box',
    },
  ],
});
