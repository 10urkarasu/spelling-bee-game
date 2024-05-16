import React from "react";
import styles from "./settingsSection.module.css";
import { Select } from "../select/Select";
import { Button } from "../button/Button";

export const SettingsSection = () => {
    return (
        <aside className={styles.container}>
            <Select />
            <Button />
        </aside>
    );
};
