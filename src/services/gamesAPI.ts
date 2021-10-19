import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const API_KEY = '53539d8347eb4d3ab10e30a71e39a8eb'

const month = new Date().getMonth() + 1;
const day = new Date().getDate();

const currentYear = new Date().getFullYear()
const currentMonth = month < 10 ? `0${month}` : month
const currentDay = day < 10 ? `0${day}` : day

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`

export const pageSize = 10;

export const gamesAPI = createApi({
    reducerPath: 'gamesAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.rawg.io/api/'}),
    endpoints: (builder) => ({
        getGames: builder.query({
            query: (upcomingCurrentPage: number) => `games?key=${API_KEY}&dates=${currentDate},${nextYear}&ordering=-added&page_size=${pageSize}&page=${upcomingCurrentPage}`
        })
    })
})

export const { useGetGamesQuery } = gamesAPI