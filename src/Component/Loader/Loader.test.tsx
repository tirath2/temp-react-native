import React from 'react';
import {render, screen} from '@testing-library/react-native';
import Loader from './Loader';

describe('Loader component test', () => {
  it('loading', () => {
    render(<Loader loading={true} />);

    const answerInputs = screen.queryByTestId('loader-container');

    expect(answerInputs).toBeTruthy();
  });
  it('notloading', () => {
    render(<Loader loading={false} />);

    const answerInputs = screen.queryByTestId('loader-container');
    expect(answerInputs).toBeFalsy();
  });
  it('loading text', () => {
    render(<Loader loading={true} text="testing" />);
    const answerInputs = screen.queryByText('testing');
    expect(answerInputs).toBeTruthy();
  });
  it('loading containerStyle', () => {
    render(<Loader loading={true} containerStyle={{backgroundColor: 'red'}} />);
    const answerInputs = screen.queryByTestId('loader-container');
    expect(answerInputs?.props?.style[1]?.backgroundColor).toEqual('red');
    expect(answerInputs).toBeTruthy();
  });
  it('loading text style', () => {
    render(<Loader loading={true} textStyle={{backgroundColor: 'red'}} />);
    const answerInputs = screen.queryByTestId('loadingText');
    expect(answerInputs?.props?.style[0]?.backgroundColor).toEqual('red');
    expect(answerInputs).toBeTruthy();
  });
});
