import {StyleSheet} from 'react-native';
import {iColor} from '../../Theme/Colors';

const styles = (color: iColor) =>
  StyleSheet.create({
    flex1: {flex: 1, backgroundColor: color.background},
    mainViewStyle: {
      flex: 1,
    },
    ScrollViewStyle: {flexGrow: 1, backgroundColor: color.background},
    flexJustifyCenter: {flex: 1, justifyContent: 'center'},
  });
export default styles;
