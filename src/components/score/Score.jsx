"use client";

import React from "react";
import styles from "./score.module.css";
import { useGame } from "@/context/gameContext";

const Score = ({ text }) => {
    const { points } = useGame();
    const sum = points.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
    );

    return <div className={styles.score}>{sum}</div>;
};

export default Score;
