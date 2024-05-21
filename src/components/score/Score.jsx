"use client";

import React from "react";
import { useGame } from "@/context/gameContext";
import styles from "./score.module.css";

const Score = ({ type }) => {
    const { points } = useGame();
    const sum = points.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
    );

    return <div className={styles[type]}>Score : {sum}</div>;
};

export default Score;
