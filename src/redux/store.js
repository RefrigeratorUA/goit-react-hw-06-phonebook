import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import counterReducer from './counter/counter-reducers';
import contactsReducer from './contacts/contacts-reducers';

const rootReducer = combineReducers({
  counter: counterReducer,
  contacts: contactsReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
