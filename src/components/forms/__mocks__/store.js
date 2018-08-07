import { createStore, applyMiddleware, compose } from 'redux';
import createReducer from './reducer.js';

export default function configureStore(initialState = {}) {
  const reducer = createReducer();
  const middlewares = [];
  const composeEnhancers = compose;
  const enhancer = composeEnhancers(
    applyMiddleware(...middlewares)
  );
  const initialValues = initialState;
  const store = createStore(
    reducer,
    initialValues,
    enhancer
  );
  return store;
}
