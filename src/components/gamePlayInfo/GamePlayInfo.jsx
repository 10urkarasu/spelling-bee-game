"use client";

import React from "react";
import { useGame } from "@/context/gameContext";
import styles from "./gamePlayInfo.module.css";

const GamePlayInfo = () => {
    const { gamePlayInfo } = useGame();

    return (
        <div
            style={
                gamePlayInfo.status
                    ? { color: "#3e8a3e" }
                    : { color: "#8a4e3e" }
            }
            className={styles.gamePlayInfo}
        >
            ! {gamePlayInfo.info}
        </div>
    );
};

export default GamePlayInfo;
