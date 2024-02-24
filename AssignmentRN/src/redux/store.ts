import { combineReducers, configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer";

export const store = configureStore({
    reducer: rootReducer
})

// export default store;