import { v4 as uuidv4 } from 'uuid';
import actionTypes from './contacts-action-types';

const addContact = (name, number) => ({
  type: actionTypes.ADD,
  payload: {
    id: uuidv4(),
    name,
    number,
  },
});

const deleteContact = id => ({
  type: actionTypes.DELETE,
  payload: id,
});

const filterContacts = filter => ({
  type: actionTypes.CHANGE_FILTER,
  payload: filter,
});

// eslint-disable-next-line
export default { addContact, deleteContact, filterContacts };
