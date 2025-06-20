import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  color: {
    text: {
      primary: '#1F1F1F',
      secondary: '#6F6F6F',
    },
    background: {
      primary: '#FFFFFF',
      secondary: '#F5F2ED',
    },
    brand: {
      primary: '#6FCF97',
      secondary: '#2F5D50',
      accent: '#B85C38',
      subtle: '#C4D7B2',
    },
    border: {
      primary: '#E0E0E0',
      secondary: '#C4D7B2',
      tertiary: '#8B8B8B',
    },
  },
});
