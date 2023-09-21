import { colors, fonts } from '@/styles/sprinkles.css';
import { globalStyle } from '@vanilla-extract/css';

globalStyle('html, body', {
  margin: 0,
});

globalStyle('body', {
  overflowY: 'scroll',
});

globalStyle('body *', {
  boxSizing: 'border-box',

  fontFamily: fonts.quicksand,
});

globalStyle('body p, a, ul, li, h1, h2, h3, h4, h5, h6', {
  color: colors.white,
});
