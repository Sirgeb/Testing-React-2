import checkPropTypes from 'check-prop-types';
import { createStore } from 'redux';

import rootReducer from '../../src/redux/reducers/rootReducer';

/**
 * Create a testing store with imported reducers, middleware, and initial state. 
 * globals: rootReducer.
 * @param {object} initialState - Initial state for store.
 * @function storeFactory
 * @returns {Store} - Redux store.
 */
export const storeFactory = (initialState) => {
  return createStore(rootReducer, initialState);
}

/**
 * Return node(s) with the given data-test attribute.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper
 * @param {string} val - Value of data-test attribute for search.
 */
export const findByTestAttribute = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}

/**
 * checks component prop(s) 
 * @param {jsx} component - React component
 * @param {object} conformingProps - props the component receives
 */
export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(component.propTypes, conformingProps, 'prop', component.name);
  expect(propError).toBeUndefined();
}

