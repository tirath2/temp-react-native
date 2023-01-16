import {ScrollViewProps, ViewStyle} from 'react-native';

export interface iContainerProps {
  scrollEnable?: boolean;
  containerStyle?: ViewStyle;
  scrollProps?: ScrollViewProps;
  children?: React.ReactElement;
  keyBoardAvoid?: boolean;
  containerScrollStyle?: ViewStyle;
  keyBoardStyle?: ViewStyle;
  loading?: boolean;
}
