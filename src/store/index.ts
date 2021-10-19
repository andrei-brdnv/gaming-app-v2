import {compose, createStore, applyMiddleware, combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import {gamesSlice} from "../slices/gamesSlice";
import {popularGamesSlice} from "../slices/popularGamesSlice";

export const rootReducer = combineReducers({
    //games: gamesReducer
    //[gamesAPI.reducerPath]: gamesAPI.reducer,
    games: gamesSlice.reducer,
    popular: popularGamesSlice.reducer
})

export const store = configureStore({
    reducer: rootReducer,
    //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(gamesAPI.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch