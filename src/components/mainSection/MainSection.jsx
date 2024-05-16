import React from "react";
import styles from "./mainSection.module.css";
import Hexagon from "../hexagon/Hexagon";

export const MainSection = () => {
    return (
        <main className={styles.container}>
            <Hexagon />
        </main>
    );
};
