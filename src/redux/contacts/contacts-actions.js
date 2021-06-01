import { createAction } from "@reduxjs/toolkit";

export const fetchRequest = createAction("contacts/fetchRequest");
export const fetchSuccess = createAction("contacts/fetchSuccess");
export const fetchError = createAction("contacts/fetchError");

export const addRequest = createAction("contacts/addRequest");
export const addSuccess = createAction("contacts/addSuccess");
export const addError = createAction("contacts/addError");

export const deleteRequest = createAction("contacts/deleteRequest");
export const deleteSuccess = createAction("contacts/deleteSuccess");
export const deleteError = createAction("contacts/deleteError");

export const filterChange = createAction("contacts/Filter");
