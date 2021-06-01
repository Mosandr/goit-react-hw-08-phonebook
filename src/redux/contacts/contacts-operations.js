import {
  addRequest,
  addSuccess,
  addError,
  deleteRequest,
  deleteSuccess,
  deleteError,
  fetchRequest,
  fetchSuccess,
  fetchError,
} from "../contacts/contacts-actions";

import axios from "axios";
axios.defaults.baseURL = "http://localhost:4040";

const fetchContacts = () => (dispatch) => {
  dispatch(fetchRequest());

  axios
    .get("/contacts")
    .then(({ data }) => dispatch(fetchSuccess(data)))
    .catch((error) => dispatch(fetchError(error)));
};

const addContact = (contact) => async (dispatch) => {
  dispatch(addRequest());

  axios
    .post("/contacts", contact)
    .then(({ data }) => {
      dispatch(addSuccess(data));
    })
    .catch((error) => {
      dispatch(addError(error));
    });
};

const deleteContact = (id) => async (dispatch) => {
  dispatch(deleteRequest());

  try {
    await axios.delete(`/contacts/${id}`);
    dispatch(deleteSuccess(id));
  } catch (error) {
    dispatch(deleteError(error));
  }
};

export default { fetchContacts, addContact, deleteContact };
