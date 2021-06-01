import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  addRequest,
  addSuccess,
  addError,
  deleteRequest,
  deleteSuccess,
  deleteError,
  filterChange,
  fetchSuccess,
  fetchRequest,
  fetchError,
} from "../contacts/contacts-actions";

const items = createReducer([], {
  [fetchSuccess]: (_, { payload }) => payload,
  [addSuccess]: (state, { payload }) => {
    return [payload, ...state];
  },
  [deleteSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const loading = createReducer(false, {
  [addRequest]: () => true,
  [addSuccess]: () => false,
  [addError]: () => false,
  [deleteRequest]: () => true,
  [deleteSuccess]: () => false,
  [deleteError]: () => false,
  [fetchRequest]: () => true,
  [fetchSuccess]: () => false,
  [fetchError]: () => false,
});

const error = createReducer("", {
  [addError]: () => "Opps! Something gone wrong. Try again",
  [deleteError]: () => "Opps! Something gone wrong. Try again",
  [fetchError]: () => "Opps! Something gone wrong. Reload page",
  [addSuccess]: () => "",
  [deleteSuccess]: () => "",
  [fetchSuccess]: () => "",
  [addRequest]: () => "",
  [deleteRequest]: () => "",
  [fetchRequest]: () => "",
});

const filterReducer = createReducer("", {
  [filterChange]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter: filterReducer,
  loading,
  error,
});
