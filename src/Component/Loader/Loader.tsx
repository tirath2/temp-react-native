import {View, Image} from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import Face from '../../Assets/Images/face.png';
import TextView from '../TextView/TextView';
import styles from './Loader.styles';
import {iLoaderProps} from './Loader.types';

const Loader = ({loading, text, containerStyle, textStyle}: iLoaderProps) => {
  const glowAnimation = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: withRepeat(
          withSequence(
            withTiming(20, {duration: 500}),
            withTiming(0, {duration: 500}),
          ),
          -1,
          true,
        ),
      },
    ],
  }));

  if (!loading) {
    return null;
  }

  return (
    <View
      testID="loader-container"
      style={[styles.mainContainer, containerStyle]}>
      <Animated.View style={[glowAnimation]}>
        <Image source={Face} resizeMode={'contain'} style={styles.logoStyle} />
      </Animated.View>
      <TextView
        testID={'loadingText'}
        font={'Medium'}
        type="Header"
        style={{...styles.textStyle, ...(textStyle || {})}}
        variant={'H4'}>
        {text}
      </TextView>
    </View>
  );
};

export default Loader;
