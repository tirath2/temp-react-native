import React, {useCallback} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {iButtonProps} from './Button.types';
import TextView from '../TextView/TextView';
import localStyles from './Button.styles';
import {useTheme} from '@react-navigation/native';
import {iColor} from '../../Theme/Colors';
import {debounce} from '../../Utils/Helper';
export default function Button(props: iButtonProps) {
  const {colors}: {colors: iColor} = useTheme();
  const styles = localStyles(colors);
  const getVariants = useCallback(() => {
    if (props.disabled) {
      let styleName = ((props.variant || 'primary') +
        '_disabled') as keyof typeof styles;
      return styles?.[styleName] || {};
    }
    return styles[props.variant || 'primary'];
  }, [props.disabled, props.variant, styles]);

  const getSize = useCallback(() => {
    return styles[props.size || 'half'];
  }, [props.size, styles]);

  const getTextStyle = useCallback(() => {
    switch (props.variant) {
      case 'primary':
        return colors.white;
      case 'secondary':
        return props.disabled ? colors.grey?.c : colors.text;
      case 'tertiary':
        return props.disabled ? colors.text : colors.primary;
    }
    return colors.white;
  }, [colors, props.disabled, props.variant]);

  return (
    <TouchableOpacity
      {...props}
      onPress={debounce(() => props.onPress(), 300)}
      style={[
        {
          ...getVariants(),

          ...getSize(),
          ...styles.buttonContainer,
          ...(props.color ? {backgroundColor: props.color} : {}),
        },
        props.style,
        props.disabled ? props.disabledStyle : {},
      ]}>
      <>
        {props.leftIcon ? (
          <View style={[props.leftIconContainerStyle]}>{props.leftIcon}</View>
        ) : null}
        {props.children || (
          <View style={[styles.textContainer, props.textContainerStyle]}>
            <TextView
              {...props.textProps}
              color={props.textColor || getTextStyle()}
              variant={'M'}
              type="titleMedium"
              font={props.textProps?.font || 'Medium'}>
              {props.title}
            </TextView>
          </View>
        )}
        {props.rightIcon ? (
          <View style={[props.rightIconContainerStyle]}>{props.rightIcon}</View>
        ) : null}
      </>
    </TouchableOpacity>
  );
}
