"use client";

import { createContext, useEffect, useContext, useReducer } from "react";

const BASE_URL = "http://localhost:3000/";
const GameContext = createContext();

const initialState = {
    letters: [],
    words: [],
    points: [],
    currentWord: "",
    secondsRemaining: null,
    languages: [],
    currentLanguage: "",
    isLoading: false,
};

function reducer(state, action) {
    switch (action.type) {
        case "loading":
            return {
                ...state,
                isLoading: true,
            };
        case "languages/loaded":
            return {
                ...state,
                isLoading: false,
                languages: action.payload,
            };
        case "currentLanguage/seted":
            return {
                ...state,
                isLoading: false,
                currentLanguage: action.payload,
            };
        case "letters/loaded":
            return {
                ...state,
                isLoading: false,
                letters: action.payload,
            };
        case "word/checked":
            return {
                ...state,
                words: action.payload.data
                    ? [...state.words, action.payload.word]
                    : [...state.words],
                points: action.payload.data
                    ? [...state.points, action.payload.word.length]
                    : [...state.points],
                currentWord: action.payload.data ? "" : state.currentWord,
                secondsRemaining: action.payload.data
                    ? secondsRemaining + 15
                    : secondsRemaining,
            };
        case "rejected":
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}

function GameProvider({ children }) {
    const [
        {
            currentLanguage,
            letters,
            words,
            points,
            currentWord,
            secondsRemaining,
            languages,
            isLoading,
        },
        dispatch,
    ] = useReducer(reducer, initialState);

    useEffect(function () {
        async function getLanguages() {
            dispatch({ type: "loading" });
            try {
                const res = await fetch(`${BASE_URL}/api/languages`);
                const data = await res.json();
                dispatch({ type: "languages/loaded", payload: data });
            } catch {
                dispatch({
                    type: "rejected",
                    payload: "There was an error loading languages ... ",
                });
            }
        }
        getLanguages();
    }, []);

    async function getLetters(count) {
        dispatch({ type: "loading" });
        try {
            const res = await fetch(
                `${BASE_URL}/api/letters/${currentLanguage}/${count}`
            );
            const data = await res.json();
            dispatch({ type: "letters/loaded", payload: data });
        } catch {
            dispatch({
                type: "rejected",
                payload: "There was an error loading letters ... ",
            });
        }
    }

    async function checkWord(word) {
        dispatch({ type: "loading" });
        try {
            const res = await fetch(
                `${BASE_URL}/api/words/${currentLanguage}/${word}`
            );
            const data = await res.json();
            dispatch({ type: "word/checked", payload: { data, word } });
        } catch {
            dispatch({
                type: "rejected",
                payload: "There was an error checked word ... ",
            });
        }
    }

    function setCurrentLanguage(lang) {
        dispatch({ type: "loading" });
        dispatch({
            type: "currentLanguage/seted",
            payload: lang,
        });
    }

    return (
        <GameContext.Provider
            value={{
                letters,
                words,
                points,
                currentWord,
                secondsRemaining,
                languages,
                currentLanguage,
                isLoading,
                setCurrentLanguage,
            }}
        >
            {children}
        </GameContext.Provider>
    );
}

function useGame() {
    const context = useContext(GameContext);
    if (context === undefined) {
        throw new Error("GameContext was used outside the GameProvider");
    }
    return context;
}
export { GameProvider, useGame };
