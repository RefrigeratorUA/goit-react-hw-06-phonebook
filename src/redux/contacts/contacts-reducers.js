import { combineReducers } from 'redux';
import actionsTypes from './contacts-action-types';

const itemsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case actionsTypes.ADD:
      return [payload, ...state];
    case actionsTypes.DELETE:
      return state.filter(({ id }) => id !== payload);
    default:
      return state;
  }
};

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case actionsTypes.CHANGE_FILTER:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
