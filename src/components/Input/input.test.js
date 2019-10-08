import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttribute, storeFactory } from '../../test/testUtils';
import Input from './Input';

/**
 * function to create a ShallowWrapper for the GuessedWords component.
 * @function setup
 * @param {object} initialState - Initial state for this setup
 * @returns {ShallowWrapper}
 */
const setup = (initialState={}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />).dive().dive();
  return wrapper;
  // console.log(wrapper.debug());
}

// setup();

describe('render', () => {
  describe('word has not been guessed', () => {
    test('renders component without error', () => {

    });
    test('renders input box', () => {

    });
    test('renders submit button', () => {

    });
  });
  describe('word has been guessed', () => {
    // let wrapper;
    // beforeEach(() => {
    //   const initialState = { success: false };
    //   wrapper = setup(initialState);
    // })
    test('renders component without error', () => {

    });
    test('does not render input box', () => {

    });
    test('does not render submit button', () => {

    });
  });
});
describe('update state', () => {
  
});