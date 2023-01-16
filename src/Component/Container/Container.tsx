import {useTheme} from '@react-navigation/native';
import React, {FC} from 'react';
import {KeyboardAvoidingView, Platform, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {KEYBOARD_BEHAVIOR, PLATFORM} from '../../Utils/Constants';
import Loader from '../Loader/Loader';
import getLocalStyles from './Container.styles';
import {iContainerProps} from './Container.types';

const Container: FC<iContainerProps> = props => {
  const {
    scrollEnable,
    containerStyle,
    scrollProps,
    children,
    keyBoardAvoid,
    containerScrollStyle,
    keyBoardStyle,
  } = props;
  const {colors} = useTheme();
  let {flexJustifyCenter, ScrollViewStyle, mainViewStyle, flex1} =
    getLocalStyles(colors);
  function mainView() {
    return <View style={[mainViewStyle, containerStyle]}>{children}</View>;
  }

  const scroll = () => {
    return (
      <View style={flex1}>
        <ScrollView
          style={flex1}
          nestedScrollEnabled={true}
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode="on-drag"
          contentContainerStyle={[ScrollViewStyle, containerScrollStyle]}
          {...scrollProps}>
          {mainView()}
        </ScrollView>
      </View>
    );
  };
  if (keyBoardAvoid) {
    return (
      <KeyboardAvoidingView
        style={[flexJustifyCenter, keyBoardStyle]}
        keyboardVerticalOffset={Platform.OS === PLATFORM.IOS ? 50 : 70}
        behavior={
          Platform.OS === PLATFORM.IOS ? KEYBOARD_BEHAVIOR.PADDING : undefined
        }>
        {scrollEnable ? scroll() : mainView()}
        <Loader loading={props.loading} />
      </KeyboardAvoidingView>
    );
  } else if (scrollEnable) {
    return (
      <>
        {scroll()}
        <Loader loading={props.loading} />
      </>
    );
  } else {
    return (
      <>
        {mainView()}
        <Loader loading={props.loading} />
      </>
    );
  }
};
export default Container;
