import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

export default function createReducer() {
  return combineReducers({
    form,
  });
}
