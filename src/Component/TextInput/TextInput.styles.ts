import {StyleSheet} from 'react-native';
import {iColor} from '../../Theme/Colors';
import spacing from '../../Theme/Spacing';

const styles = (color: iColor) => {
  return StyleSheet.create({
    outlined: {
      borderWidth: 1,
      borderColor: color.grey?.a,
    },
    underline: {
      borderBottomWidth: 1,
      borderBottomColor: color.grey?.a,
    },
    defaultContainerStyle: {
      alignItems: 'flex-start',
      width: '90%',
      alignSelf: 'center',
    },
    defaultInputContainerStyle: {
      backgroundColor: color.white,
      height: 50,
      alignSelf: 'center',
      borderRadius: 8,
      paddingHorizontal: spacing(2),
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
    },
    defaultLabelContainerStyle: {
      flexDirection: 'row',
      alignItems: 'flex-end',
    },
    defaultErrorContainerStyle: {
      alignItems: 'flex-start',
      width: '100%',
    },
    textInputContainerStyle: {
      flex: 1,
      justifyContent: 'center',
    },
    textInputStyle: {fontSize: 16, fontFamily: 'Mukta Medium'},
  });
};

export default styles;
