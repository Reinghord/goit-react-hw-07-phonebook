import { createReducer, combineReducers } from '@reduxjs/toolkit';
import actions from './phonebook-actions';

const filter = createReducer('', {
  [actions.changeFilter]: (_, action) => action.payload,
});

export default combineReducers({
  filter,
});
