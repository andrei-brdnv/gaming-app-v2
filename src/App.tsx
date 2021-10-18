import React, { FC } from "react";
import "./App.css";
import { Header } from "./components/header/Header";

export const App: FC = () => {
    return (
        <div id="app">
            <Header />
            Hellew!
        </div>
    );
}
