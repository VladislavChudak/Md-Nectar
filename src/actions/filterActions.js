import { createAction } from 'redux-actions';

export const CANCEL_FILTER_VALUES = 'CANCEL_FILTER_VALUES';
export const ADD_FILTER_VALUES = 'ADD_FILTER_VALUES';
export const CLEAR_FILTER_VALUES = 'CLEAR_FILTER_VALUES';
export const DELETE_FILTER_VALUE = 'DELETE_FILTER_VALUE'; 

export const cancelFilterValues = createAction(CANCEL_FILTER_VALUES);
export const addFilterValues = createAction(ADD_FILTER_VALUES);
export const clearFilterValues = createAction(CLEAR_FILTER_VALUES);
export const deleteFilterValue = createAction(DELETE_FILTER_VALUE, (id) => ({id}));
