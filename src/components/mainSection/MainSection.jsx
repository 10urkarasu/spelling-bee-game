"use client";

import React from "react";
import styles from "./mainSection.module.css";
import { Input } from "../input/Input";
import HexagonList from "../hexagonList/HexagonList";
import { useGame } from "@/context/gameContext";
import { Button } from "../button/Button";

export const MainSection = () => {
    const { status, setStatus } = useGame();

    return (
        <main className={styles.container}>
            {status === "wait" ? (
                <>
                    <Button text={"play"} onClick={() => setStatus("play")} />
                </>
            ) : (
                <>
                    <HexagonList />
                    <Input />
                </>
            )}
        </main>
    );
};
