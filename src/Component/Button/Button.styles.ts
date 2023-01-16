import {Dimensions, StyleSheet} from 'react-native';
import {iColor} from '../../Theme/Colors';
import {scale} from '../../Theme/FontSize';
const {width} = Dimensions.get('window');
const styles = (color: iColor) => {
  return StyleSheet.create({
    primary: {
      backgroundColor: color.primary,
    },
    secondary: {
      backgroundColor: color.white,
      borderColor: color.grey?.a,
      borderWidth: 1,
    },
    tertiary: {
      backgroundColor: color.transparent,
    },
    buttonContainer: {
      borderRadius: 100,
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
    },
    half: {
      width: width * 0.5,
      height: 40,
    },
    full: {
      width: width * 0.9,
      height: 50,
    },

    primary_disabled: {
      backgroundColor: color.blue?.b,
    },
    secondary_disabled: {
      backgroundColor: color.grey?.a,
    },
    tertiary_disabled: {
      backgroundColor: color.transparent,
    },
    textContainer: {
      marginHorizontal: scale(2),
    },
  });
};

export default styles;
