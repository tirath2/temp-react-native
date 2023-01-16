import {StyleSheet} from 'react-native';
import spacing from '../../Theme/Spacing';

const styles = StyleSheet.create({
  mainContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    elevation: 2,
    zIndex: 100,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoStyle: {
    width: 100,
    height: 100,
  },
  textStyle: {
    marginTop: spacing(4),
  },
});
export default styles;
