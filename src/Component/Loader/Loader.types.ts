import {TextStyle, ViewStyle} from 'react-native';

export interface iLoaderProps {
  loading: boolean | undefined;
  text?: string;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
}
