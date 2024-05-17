import React, { useReducer } from "react";
import GameContext from "./gameContext";
import gameReducer, { initialState } from "../reducers/gameReducer";

const GameProvider = ({ children }) => {
    const [state, dispatch] = useReducer(gameReducer, initialState);

    return (
        <GameContext.Provider value={{ state, dispatch }}>
            {children}
        </GameContext.Provider>
    );
};

export default GameProvider;
