import React, {FC, useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../hooks/app";
import { useDispatch } from "react-redux";
import {fetchGames} from "../slices/gamesSlice";
import {getPopularGames} from "../slices/popularGamesSlice";

export const Home: FC = () => {
    //RTK Query
    const [page, setPage] = useState(1)

    const { upcoming } = useAppSelector(store => store.games)
    const { popular } = useAppSelector(state => state.popular)
    // @ts-ignore
    //const { data, isLoading } = useGetGamesQuery(page)

    //Slices
    const dispatch = useAppDispatch()

    useEffect(() => {
        // @ts-ignore
        dispatch<any>(fetchGames(page))
    }, [page])

    useEffect(() => {
        // @ts-ignore
        dispatch(getPopularGames(page))
    }, [])

    //console.log(data)

    return (
        <div>
            {/*{data && data.results.map((game: any) => (
                <div>{game.name}</div>
            ))}*/}
            {upcoming && upcoming.map((game: any) => (
                <div>{game.name}</div>
            ))}
            <hr />
            {popular && popular.map((game: any) => (
                <div>{game.name}</div>
            ))}
            <button onClick={() => setPage(page + 1)}>
                Load more...
            </button>
        </div>
    );
};