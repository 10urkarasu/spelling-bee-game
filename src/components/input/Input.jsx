"use client";

import React from "react";
import { useGame } from "@/context/gameContext";
import styles from "./input.module.css";

export const Input = () => {
    const { checkLetter, checkWord, currentWord } = useGame();

    const handleChange = (event) => {
        checkLetter(event.nativeEvent.data) && checkWord(event.target.value);
    };

    return (
        <input
            className={styles.input}
            type="text"
            onChange={handleChange}
            value={currentWord}
            placeholder="your word guess..."
        />
    );
};
