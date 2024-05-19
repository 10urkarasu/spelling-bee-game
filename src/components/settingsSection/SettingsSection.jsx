"use client";

import React from "react";
import styles from "./settingsSection.module.css";
import { Select } from "../select/Select";
import { Button } from "../button/Button";
import Container from "../score/Score";
import { useGame } from "@/context/gameContext";

export const SettingsSection = () => {
    const { restart } = useGame();
    return (
        <aside className={styles.container}>
            <Select />
            <Button text={"restart"} onClick={restart} />
        </aside>
    );
};
