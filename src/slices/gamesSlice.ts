import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IGame} from "../models/IGame";
import axios from "axios";

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
    upcoming: IGame[],
    status: string,
    //totalPagesUpcoming: number,
    //upcomingCurrentPage: number,
}

const initialState: InitialState = {
    upcoming: [],
    status: '',
}

export const fetchGames = createAsyncThunk(
    'games/fetchGames',
    async (page, {rejectWithValue}) => {
        try {
            const response: any = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&dates=${currentDate},${nextYear}&ordering=-added&page_size=${pageSize}&page=${page}`)
            console.log(response.data)
            return response.data.results
        } catch (e: any) {
            return rejectWithValue(e.message)
        }
    }
)

export const gamesSlice = createSlice({
    name: 'games',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchGames.pending.type]: (state) => {
            state.status = 'loading'
        },
        [fetchGames.fulfilled.type]: (state, action: PayloadAction<any>) => {
            state.status = 'resolved'
            //state.error = ''
            state.upcoming = state.upcoming.concat(action.payload)
        },
        [fetchGames.rejected.type]: (state, action: PayloadAction<any>) => {
            state.status = 'rejected'
            //state.error = action.payload
        },
    }
})