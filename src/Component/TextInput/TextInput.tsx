import React, {useCallback, useState} from 'react';
import {
  View,
  TextInput as RNTextInput,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from 'react-native';
import {iTextInputProps} from './TextInput.types';
import {debounce} from '../../Utils/Helper';
import {useTheme} from '@react-navigation/native';
import localStyles from './TextInput.styles';
import spacing from '../../Theme/Spacing';
import TextView from '../TextView/TextView';
import {iColor} from '../../Theme/Colors';

const TextInput = React.forwardRef<RNTextInput, iTextInputProps>(
  (props, ref) => {
    const {
      variant,
      containerStyle,
      errorMsg,
      onChangeText,
      label,
      labelContainer,
      onFocus,
      onBlur,
      leftIcon,
      leftContainerStyle,
      style,
      rightComponentStyle,
      rightIcon,
      mandatory,
      inputContainerStyle,
    } = props;
    const {colors}: {colors: iColor} = useTheme();
    const [focused, setFocused] = useState(false);
    const styles = localStyles(colors);
    const getContainerStyle = useCallback(() => {
      return {
        ...styles[variant || 'underline'],
        ...styles.defaultInputContainerStyle,
        ...(inputContainerStyle || {}),
        ...(focused
          ? {
              [variant === 'outlined' ? 'borderColor' : 'borderBottomColor']:
                colors.text,
            }
          : {}),
        ...(errorMsg
          ? {
              borderBottomColor: colors.red?.primary,
              borderColor: colors.red?.primary,
            }
          : {}),
      };
    }, [colors, inputContainerStyle, errorMsg, focused, styles, variant]);

    const onChange = useCallback(
      (text: string) => {
        if (onChangeText) {
          debounce(onChangeText(text), 300);
        }
      },
      [onChangeText],
    );

    const getLabel = () => {
      if (label) {
        return (
          <View style={[styles.defaultLabelContainerStyle, labelContainer]}>
            <TextView variant="L" type="titleMedium">
              {label}
            </TextView>
            {mandatory ? (
              <TextView
                style={{marginTop: spacing(1)}}
                variant="L"
                color={colors.red?.primary}
                type="titleMedium">
                {'*'}
              </TextView>
            ) : null}
          </View>
        );
      }
    };

    const getError = () => {
      if (errorMsg) {
        return (
          <View style={styles.defaultErrorContainerStyle}>
            <TextView
              variant="S"
              color={colors.red?.primary}
              type="bodySingleLine">
              {errorMsg}
            </TextView>
          </View>
        );
      }
    };

    const onInputFocus = useCallback(
      (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setFocused(true);
        if (onFocus) {
          onFocus(e);
        }
      },
      [onFocus],
    );

    const onInputBlur = useCallback(
      (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setFocused(false);
        if (onBlur) {
          onBlur(e);
        }
      },
      [onBlur],
    );

    return (
      <View style={[styles.defaultContainerStyle, inputContainerStyle]}>
        {getLabel()}
        <View style={[getContainerStyle()]}>
          {leftIcon ? <View style={leftContainerStyle}>{leftIcon}</View> : null}
          <View style={styles.textInputContainerStyle}>
            <RNTextInput
              {...props}
              onChangeText={onChange}
              ref={ref}
              onFocus={onInputFocus}
              onBlur={onInputBlur}
              style={[
                styles.textInputStyle,
                focused ? {color: colors.text} : {},
                style,
              ]}
            />
          </View>
          {rightIcon ? (
            <View style={rightComponentStyle}>{rightIcon}</View>
          ) : null}
        </View>
        {getError()}
      </View>
    );
  },
);

export default TextInput;
