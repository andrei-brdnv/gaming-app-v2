import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";
import {IGame} from "../models/IGame";

const API_KEY = '53539d8347eb4d3ab10e30a71e39a8eb'

const month = new Date().getMonth() + 1;
const day = new Date().getDate();

const currentYear = new Date().getFullYear()
const currentMonth = month < 10 ? `0${month}` : month
const currentDay = day < 10 ? `0${day}` : day

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`

const pageSize = 10;

export interface InitialState {
    popular: IGame[],
    status: string,
    //totalPagesUpcoming: number,
    //upcomingCurrentPage: number,
}

const initialState: InitialState = {
    popular: [],
    status: '',
}

export const getPopularGames = createAsyncThunk(
    'popular/getPopularGames',
    async (page, {rejectWithValue}) => {
        try {
            const response: any = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=${pageSize}&page=${page}`)
            console.log(response.data)
            return response.data.results
        } catch (e: any) {
            return rejectWithValue(e.message)
        }
    }
)

export const popularGamesSlice = createSlice({
    name: 'popular',
    initialState,
    reducers: {},
    extraReducers: {
        [getPopularGames.pending.type]: (state) => {
            state.status = 'loading'
        },
        [getPopularGames.fulfilled.type]: (state, action: PayloadAction<any>) => {
            state.status = 'resolved'
            //state.error = ''
            state.popular = state.popular.concat(action.payload)
        },
        [getPopularGames.rejected.type]: (state, action: PayloadAction<any>) => {
            state.status = 'rejected'
            //state.error = action.payload
        },
    }
})