import React, { FC } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";

export const App: FC = () => {
    return (
        <div id="app">
            <Header />
            <Home />
        </div>
    );
}
