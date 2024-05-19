"use client";

import React from "react";
import styles from "./input.module.css";
import { useGame } from "@/context/gameContext";

export const Input = () => {
    const { checkWord, currentWord } = useGame();

    return (
        <input
            className={styles.input}
            type="text"
            onChange={(event) => checkWord(event.target.value)}
            value={currentWord}
        />
    );
};
