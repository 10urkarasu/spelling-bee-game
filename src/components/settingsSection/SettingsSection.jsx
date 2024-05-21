"use client";

import React from "react";
import { useGame } from "@/context/gameContext";
import { Select } from "../select/Select";
import { Button } from "../button/Button";
import styles from "./settingsSection.module.css";

export const SettingsSection = () => {
    const { restart } = useGame();
    return (
        <aside className={styles.container}>
            <Select />
            <Button type={"regular"} text={"restart"} onClick={restart} />
        </aside>
    );
};
