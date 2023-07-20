import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { storage } from 'redux-persist'
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";



const reducers = combineReducers({});

const persistConfig = {
    key: "root",
    storage
}

const persistedReducer = persistReducer( persistConfig,  reducers);

const store = configureStore({
    reducer: persistedReducer
})

export const persistor = persistStore(store)

