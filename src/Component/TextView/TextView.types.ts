import {ColorValue, TextProps} from 'react-native';

export type textVariant =
  | 'H1'
  | 'H2'
  | 'H3'
  | 'H4'
  | 'H5'
  | 'H6'
  | 'XXS'
  | 'XS'
  | 'S'
  | 'M'
  | 'L'
  | 'XL';

export type TextFont =
  | 'ExtraLight'
  | 'Light'
  | 'Regular'
  | 'Medium'
  | 'SemiBold'
  | 'Bold'
  | 'ExtraBold';

export type TextType =
  | 'Header'
  | 'bodySingleLine'
  | 'bodyParagraph'
  | 'titleMedium'
  | 'titleParagraph';

export interface ITextViewProps extends TextProps {
  children?: React.ReactNode;
  variant?: textVariant;
  font?: TextFont;
  color?: ColorValue;
  type?: TextType;
}
