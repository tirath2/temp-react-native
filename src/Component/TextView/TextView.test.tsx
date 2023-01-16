import React from 'react';
import {render, screen} from '@testing-library/react-native';
import TextView from './TextView';

describe('TextView component test', () => {
  it('TextView', () => {
    render(<TextView>Test</TextView>);
    const answerInputs = screen.queryByText('Test');
    expect(answerInputs).toBeTruthy();
  });
});
