import { colors, fonts } from '@/sprinkles.css';
import { globalStyle } from '@vanilla-extract/css';

globalStyle('html, body', {
  margin: 0,

  backgroundColor: colors.chaosBlack,
});

globalStyle('body *', {
  boxSizing: 'border-box',

  fontFamily: fonts.quicksand,
  color: colors.white,
});
