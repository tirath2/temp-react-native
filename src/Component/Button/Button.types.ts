import {ViewStyle, TouchableOpacityProps, ColorValue} from 'react-native';
import {ITextViewProps} from '../TextView/TextView.types';

export type buttonVariant = 'primary' | 'secondary' | 'tertiary';
export type buttonSize = 'half' | 'full';
export interface iButtonProps extends TouchableOpacityProps {
  size?: buttonSize;
  variant?: buttonVariant;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  leftIconContainerStyle?: ViewStyle;
  rightIconContainerStyle?: ViewStyle;
  children?: React.ReactElement;
  style?: ViewStyle;
  disabled?: boolean;
  color?: ColorValue;
  title?: string | null;
  textProps?: ITextViewProps;
  textColor?: ColorValue;
  textContainerStyle?: ViewStyle;
  disabledStyle?: ViewStyle;
  onPress: () => void;
}
