"use client";

import React from "react";
import styles from "./input.module.css";
import { useGame } from "@/context/gameContext";

export const Input = () => {
    const { checkWord } = useGame();
    const handleChange = (event) => {
        const inputValue = event.target.value;
        checkWord(inputValue);
    };

    return (
        <input className={styles.input} type="text" onChange={handleChange} />
    );
};
