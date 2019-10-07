import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttribute, checkProps } from '../../test/testUtils';

import GuessedWords from './GuessedWord';
import { exportAllDeclaration } from '@babel/types';

const defaultProps = {
  guessedWords: [
    { guessedWord: 'train', letterMatchCount: 3 }
  ]
};

/**
 *  function to create a shallowWrapper for the GuessedWords component
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper} - returns a wrapper
 */
const setup = (props={}) => {
   const setupProps = { ...defaultProps, ...props };
   return shallow(<GuessedWords {...setupProps} />);
};

test('does not throw warning with expected props', () => {
  checkProps(GuessedWords, defaultProps);
});

describe('if there are no words guessed', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });

  test('renders without error', () => {
    const wrapper = setup({ guessedWords: "h" });
    const component = findByTestAttribute(wrapper, 'component-guessed-words');
    expect(component.length).toBe(1);
  });

  test('renders instructions to guess a word', () => {
    const instructions = findByTestAttribute(wrapper, 'guess-instructions');
    expect(instructions.text().length).not.toBe(0);
  });

});

describe('if there are words guessed', () => {

});
