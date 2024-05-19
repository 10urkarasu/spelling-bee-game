"use client";

import { createContext, useEffect, useContext, useReducer } from "react";

const BASE_URL = "http://localhost:3000/";
const GameContext = createContext();

const initialState = {
    letters: [],
    words: [],
    points: [],
    currentWord: "",
    secondsRemaining: 60,
    languages: [],
    currentLanguage: "",
    isLoading: false,
    status: "wait",
    gamePlayInfo: "Guess a word containing letters",
};

function reducer(state, action) {
    switch (action.type) {
        case "loading":
            return {
                ...state,
                isLoading: true,
            };
        case "status":
            return {
                ...state,
                status: action.payload,
            };
        case "seconds":
            return {
                ...state,
                secondsRemaining: 60,
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
            return action.payload.data
                ? {
                      ...state,
                      words: [...state.words, action.payload.word],
                      points: [...state.points, action.payload.word.length],
                      currentWord: "",
                      isLoading: false,
                      secondsRemaining: state.secondsRemaining + 15,
                      gamePlayInfo: "Correct word. You gained 15 seconds.",
                  }
                : {
                      ...state,
                      currentWord: action.payload.word,
                      gamePlayInfo: "No words found in the dictionary.",
                  };
        case "rejected":
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        case "restart":
            return {
                ...state,
                words: [],
                points: [],
                currentWord: "",
                secondsRemaining: 60,
                gamePlayInfo: "Guess a word containing letters",
                isLoading: false,
            };
        case "tick":
            return {
                ...state,
                secondsRemaining:
                    state.status === "play"
                        ? state.secondsRemaining - 1
                        : state.secondsRemaining,
                status:
                    state.secondsRemaining === 0 ? "finished" : state.status,
            };
        default:
            return state;
    }
}

function GameProvider({ children }) {
    const [
        {
            status,
            gamePlayInfo,
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

    async function getLetters(lang, count) {
        dispatch({ type: "loading" });
        try {
            const res = await fetch(
                `${BASE_URL}/api/letters/${
                    lang ? lang : currentLanguage
                }/${count}`
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
        if (!word) return;
        try {
            const res = await fetch(
                `${BASE_URL}/api/words/${currentLanguage}/${word}`
            );
            const data = await res.json();
            dispatch({ type: "word/checked", payload: { data, word } });
            return data;
        } catch {
            dispatch({
                type: "rejected",
                payload: "There was an error checked word ... ",
            });
        }
    }

    function setCurrentLanguage(lang) {
        dispatch({ type: "loading" });
        dispatch({ type: "restart" });
        dispatch({
            type: "currentLanguage/seted",
            payload: lang,
        });
        dispatch({
            type: "status",
            payload: "wait",
        });
        getLetters(lang, 7);
    }

    function setStatus(status) {
        dispatch({ type: "loading" });
        dispatch({
            type: "status",
            payload: status,
        });
        console.log(status);
    }

    function setSeconds() {
        dispatch({
            type: "tick",
        });
    }

    function restart() {
        getLetters(currentLanguage, 7);
        dispatch({ type: "restart" });
    }

    return (
        <GameContext.Provider
            value={{
                status,
                gamePlayInfo,
                letters,
                words,
                points,
                currentWord,
                secondsRemaining,
                languages,
                currentLanguage,
                isLoading,
                setCurrentLanguage,
                getLetters,
                checkWord,
                setStatus,
                setSeconds,
                restart,
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
