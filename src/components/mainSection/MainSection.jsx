import React from "react";
import styles from "./mainSection.module.css";
import Hexagon from "../hexagon/Hexagon";
import { Input } from "../input/Input";

export const MainSection = () => {
    return (
        <main className={styles.container}>
            <Hexagon />
            <Input />
        </main>
    );
};
