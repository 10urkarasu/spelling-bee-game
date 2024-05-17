import React from "react";
import styles from "./mainSection.module.css";
import { Input } from "../input/Input";
import HexagonList from "../hexagonList/HexagonList";

export const MainSection = () => {
    return (
        <main className={styles.container}>
            <HexagonList />
            <Input />
        </main>
    );
};
