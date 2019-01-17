import checkPropTypes from 'check-prop-types';
import { createStore, applyMiddleware } from 'redux';

import {middlewares} from '../src/configureStore';

import rootReducers from '../src/reducers';

/**
 * @param {object} initialState Initial State for store
 * @function storeFactory
 * @return {Store} - Redux store.
 */
export const storeFactory = (initialState)=>{
  const createStoreMiddlewares = applyMiddleware(...middlewares)(createStore);
  return createStoreMiddlewares(rootReducers, initialState);
};

/**
 * Return node(s) with the given data-test attribute
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper.
 * @param {String} val - Value of the data-test attribute
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(component.propTypes, conformingProps, 'props', component.name);
  expect(propError).toBeUndefined();
};