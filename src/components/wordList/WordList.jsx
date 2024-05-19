"use client";

import React from "react";
import styles from "./wordList.module.css";
import { Word } from "../word/Word";
import { useGame } from "@/context/gameContext";

export const WordList = () => {
    const { words } = useGame();
    return (
        <ul className={styles.wordList}>
            {words.map((word, index) => (
                <Word word={word} key={index} />
            ))}
        </ul>
    );
};
