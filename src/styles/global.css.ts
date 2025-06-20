import { globalStyle } from '@vanilla-extract/css';
import { vars } from '@/styles/tokens/colors.css';

globalStyle('html, body', {
  backgroundColor: vars.color.background.primary,
  color: vars.color.text.primary,
  fontFamily: `'Pretendard', 'Noto Sans KR', sans-serif`,
  lineHeight: '1.5',
  WebkitFontSmoothing: 'antialiased',
});

globalStyle('*', {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
});
