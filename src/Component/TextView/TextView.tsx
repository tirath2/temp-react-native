import React from 'react';
import {Text, TextStyle} from 'react-native';
import {ITextViewProps} from './TextView.types';
import {useCallback} from 'react';
import localStyles from './TextView.styles';

const TextView: React.FC<ITextViewProps> = props => {
  const getFontSize = useCallback((): TextStyle => {
    let size = props.variant || 'M';
    let type = props.type ? '_' + props.type : '';
    let fontSize: string = size + type || 'M';
    return localStyles[fontSize] || {};
  }, [props.type, props.variant]);

  const getFont = useCallback(() => {
    return localStyles[props.font || 'Regular'];
  }, [props.font]);

  return (
    <Text
      {...props}
      style={[
        props.style,
        {
          ...getFontSize(),
          ...getFont(),
          ...(props.color ? {color: props.color} : {}),
        },
      ]}
    />
  );
};

export default TextView;
