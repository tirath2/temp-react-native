import {StyleSheet} from 'react-native';
import {getFontSize} from '../../Utils/Helper';

const localStyles: any = StyleSheet.create({
  H1_Header: {fontSize: getFontSize(28), lineHeight: 60},
  H2_Header: {fontSize: getFontSize(24), lineHeight: 56},
  H3_Header: {fontSize: getFontSize(18), lineHeight: 44},
  H4_Header: {fontSize: getFontSize(16), lineHeight: 40},
  H5_Header: {fontSize: getFontSize(14), lineHeight: 36},
  H6_Header: {fontSize: getFontSize(20), lineHeight: 26},

  XXS_bodyParagraph: {fontSize: getFontSize(10), lineHeight: 14},
  XS_bodyParagraph: {fontSize: getFontSize(12), lineHeight: 16},
  S_bodyParagraph: {fontSize: getFontSize(14), lineHeight: 20},
  M_bodyParagraph: {fontSize: getFontSize(16), lineHeight: 22},
  L_bodyParagraph: {fontSize: getFontSize(18), lineHeight: 24},
  XL_bodyParagraph: {fontSize: getFontSize(10), lineHeight: 10},

  XXS_bodySingleLine: {fontSize: getFontSize(10), lineHeight: 12},
  XS_bodySingleLine: {fontSize: getFontSize(12), lineHeight: 14},
  S_bodySingleLine: {fontSize: getFontSize(14), lineHeight: 15},
  M_bodySingleLine: {fontSize: getFontSize(16), lineHeight: 18},
  L_bodySingleLine: {fontSize: getFontSize(18), lineHeight: 20},
  XL_bodySingleLine: {fontSize: getFontSize(20), lineHeight: 22},

  XS_titleMedium: {fontSize: getFontSize(10)},
  S_titleMedium: {fontSize: getFontSize(12)},
  M_titleMedium: {
    fontSize: getFontSize(14),
  },
  L_titleMedium: {fontSize: getFontSize(16)},
  XL_titleMedium: {fontSize: getFontSize(20)},

  XS_titleParagraph: {fontSize: getFontSize(10), lineHeight: 14},
  S_titleParagraph: {fontSize: getFontSize(12), lineHeight: 18},
  M_titleParagraph: {fontSize: getFontSize(14), lineHeight: 16},
  L_titleParagraph: {fontSize: getFontSize(16), lineHeight: 22},
  XL_titleParagraph: {fontSize: getFontSize(18), lineHeight: 24},

  ExtraLight: {
    fontFamily: 'Mukta ExtraLight',
  },
  Light: {
    fontFamily: 'Mukta Light',
  },
  Regular: {
    fontFamily: 'Mukta Regular',
  },
  Medium: {
    fontFamily: 'Mukta Medium',
  },
  SemiBold: {
    fontFamily: 'Mukta SemiBold',
  },
  Bold: {
    fontFamily: 'Mukta Bold',
  },
  ExtraBold: {
    fontFamily: 'Mukta ExtraBold',
  },
});
export default localStyles;
