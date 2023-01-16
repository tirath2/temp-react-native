import {StyleSheet} from 'react-native';
import {iColor} from '../../Theme/Colors';

export default (color: iColor) =>
  StyleSheet.create({
    rootContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: color.background,
    },
    headerText: {
      color: color.text,
    },
  });
