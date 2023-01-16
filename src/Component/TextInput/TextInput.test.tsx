import React from 'react';
import {render, screen} from '@testing-library/react-native';
import TextInput from './TextInput';

describe('TextInput component test', () => {
  it('TextInput', () => {
    render(<TextInput value="Test" />);
    const answerInputs = screen.queryAllByTestId('TextInput');
    expect(answerInputs).toBeTruthy();
  });
  it('onchange Text', () => {
    render(<TextInput value="Test" />);
    const answerInputs = screen.queryAllByTestId('TextInput');
    expect(answerInputs).toBeTruthy();
  });
});
