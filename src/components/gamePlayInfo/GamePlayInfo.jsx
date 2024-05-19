"use client";

import React from "react";
import styles from "./gamePlayInfo.module.css";
import { useGame } from "@/context/gameContext";

const GamePlayInfo = () => {
    const { gamePlayInfo } = useGame();

    return <div className={styles.gamePlayInfo}>{gamePlayInfo}</div>;
};

export default GamePlayInfo;
