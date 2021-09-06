import { createAction } from '@reduxjs/toolkit';
import { v4 } from 'uuid';

const addContact = createAction('contact/Add', ({ name, number }) => {
  return {
    payload: {
      id: v4(),
      name,
      number,
    },
  };
});
const deleteContact = createAction('contact/Delete');
const changeFilter = createAction('contact/ChangeFilter');

// eslint-disable-next-line import/no-anonymous-default-export
export default { addContact, deleteContact, changeFilter };

// варіант без toolkit
// const addContact = ({ name, number }) => ({
//   type: types.ADD,
//   payload: {
//     id: v4(),
//     name,
//     number,
//   },
// });
// const changeFilter = value => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });
