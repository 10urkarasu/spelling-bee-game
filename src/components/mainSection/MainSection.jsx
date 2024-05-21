"use client";

import React from "react";
import { useGame } from "@/context/gameContext";
import { Input } from "../input/Input";
import HexagonList from "../hexagonList/HexagonList";
import { Button } from "../button/Button";
import GamePlayInfo from "../gamePlayInfo/GamePlayInfo";
import Score from "../score/Score";
import styles from "./mainSection.module.css";

export const MainSection = () => {
    const { status, setStatus } = useGame();

    return (
        <main>
            {status === "wait" ? (
                <div className={styles.wrapper}>
                    <Button
                        type={"gamePlay"}
                        text={"play"}
                        onClick={() => setStatus("play")}
                    />
                </div>
            ) : status === "finished" ? (
                <div className={styles.wrapper}>
                    <Score type={"scoreMain"} />
                    <Button
                        type={"gamePlay"}
                        text={"Play Again"}
                        onClick={() => setStatus("play")}
                    />
                </div>
            ) : (
                <div className={styles.container}>
                    <GamePlayInfo />
                    <HexagonList />
                    <Input />
                </div>
            )}
        </main>
    );
};
