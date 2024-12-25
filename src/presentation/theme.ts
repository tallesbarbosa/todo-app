import { moderateScale } from 'react-native-size-matters'

export const theme = {
  colors: {
    danger: '#E25858',
    gray_100: '#F2F2F2',
    gray_200: '#D9D9D9',
    gray_300: '#808080',
    gray_400: '#333333',
    gray_500: '#262626',
    gray_600: '#1A1A1A',
    gray_700: '#0D0D0D',
    purple: '#8284FA',
    purple_dark: '#5E60CE',
    blue: '#4EA8DE',
    blue_dark: '#1E6F9F',
  },
  font: {
    sizes: {
      H6: moderateScale(16),
      H5: moderateScale(18),
      H4: moderateScale(20),
    },
    weights: {
      bold: 'bold',
      regular: 'normal',
    },
    lineHeight: 24,
  },
}
