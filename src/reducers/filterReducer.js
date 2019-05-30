import { handleActions } from 'redux-actions';

const initialState = {
    selectedValues: []
};

export default handleActions({
    ADD_FILTER_VALUES: (state, action) => ({
        ...state,
        selectedValues: action.payload
    }),
    CANCEL_FILTER_VALUES: (state, action) => ({
        ...state,
        selectedValues: state.selectedValues.filter(value => !action.payload.includes(value))
    }),
    CLEAR_FILTER_VALUES: (state, action) => ({
        ...state,
        selectedValues: []
    }),
    DELETE_FILTER_VALUEL: (state, action) => ({
        ...state,
        selectedValues: state.selectedValues.filter(item => item.id !== action.payload.id)
    })
}, initialState);