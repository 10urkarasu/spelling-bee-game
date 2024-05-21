"use client";

import React from "react";
import { useGame } from "@/context/gameContext";
import { Word } from "../word/Word";
import styles from "./wordList.module.css";

export const WordList = () => {
    const { words } = useGame();
    const lastTenWords = words.slice(-10);
    return (
        <ul className={styles.wordList}>
            {lastTenWords.map((word, index) => (
                <Word word={word} key={index} />
            ))}
        </ul>
    );
};
