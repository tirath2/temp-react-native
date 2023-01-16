import React from 'react';
import {TextInputProps, TextStyle, ViewStyle} from 'react-native';
export {TextInput as TextInputType} from 'react-native';
export type textInputVariant = 'outlined' | 'underline';

export interface iTextInputProps extends TextInputProps {
  variant?: textInputVariant;
  containerStyle?: ViewStyle;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  leftContainerStyle?: ViewStyle;
  rightComponentStyle?: ViewStyle;
  errorMsg?: String;
  errorMsgContainerStyle?: ViewStyle;
  errorMsgStyle?: TextStyle;
  disabledStyle?: ViewStyle;
  labelStyle?: TextStyle;
  label?: String;
  labelContainer?: ViewStyle;
  mandatory?: boolean;
  inputContainerStyle?: ViewStyle;
}
