import { createStore } from "redux";
import filterReducer from "../reducers/filterReducer";

export default function configureStore(InitialState) {
    return createStore(
        filterReducer,
        InitialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
};
