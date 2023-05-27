import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { WIDTH } from '../../constants';
import { Props } from './type';
import Text from '../Text/Text';

export const Button = ({
  children,
  textStyles,
  pressableStyle,
  ...buttonProps
}: Props) => {
  return (
    <Pressable {...buttonProps} style={[styles.defaultButton, pressableStyle]}>
      <Text style={[styles.defaultText, textStyles]}>{children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  defaultButton: {
    width: 100 * WIDTH,
    height: 28 * WIDTH,
    borderRadius: 5,
    backgroundColor: '#394265',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10 * WIDTH,
  },
  defaultText: {
    // fontFamily: 'NanumSquareEB',
    fontSize: 12 * WIDTH,
    lineHeight: 12 * WIDTH,
    color: '#FFFFFF',
    paddingVertical: 8 * WIDTH,
  },
});
