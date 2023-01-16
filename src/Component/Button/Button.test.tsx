import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';
import Button from './Button';
import palette from '../../Theme/Pallette';
import TextView from '../TextView/TextView';
jest.useFakeTimers();

const onPressMock = jest.fn();
const onPressDisabledMock = jest.fn();
describe('Button component test', () => {
  it('testing on press', () => {
    render(<Button testID="button" onPress={onPressMock} title="Test" />);

    expect(screen.queryByTestId('button')).toBeTruthy();
    fireEvent.press(screen.getByTestId('button'));
    jest.runAllTimers();
    expect(onPressMock).toBeCalled();
  });

  it('testing disabled', () => {
    render(
      <Button
        testID="button"
        disabled
        onPress={onPressDisabledMock}
        title="Test"
      />,
    );

    expect(screen.queryByTestId('button')).toBeTruthy();
    fireEvent.press(screen.getByTestId('button'));
    jest.runAllTimers();
    expect(onPressDisabledMock).not.toHaveBeenCalled();
  });

  it('testing variant', () => {
    render(
      <Button
        testID="button"
        variant="secondary"
        title="Test"
        onPress={onPressDisabledMock}
      />,
    );

    expect(screen.queryByTestId('button')).toBeTruthy();
    expect(screen.getByTestId('button')).toHaveStyle({
      borderWidth: 1,
    });
  });

  it('testing left right icon', () => {
    render(
      <Button
        testID="button"
        variant="secondary"
        title="Test"
        leftIcon={<TextView testID="leftIcon">Left</TextView>}
        rightIcon={<TextView testID="rightIcon">right</TextView>}
        onPress={onPressDisabledMock}
      />,
    );

    expect(screen.getByTestId('leftIcon')).toBeTruthy();
    expect(screen.getByTestId('rightIcon')).toBeTruthy();
  });
});
