import React from "react";
import styles from "./word.module.css";

export const Word = ({ word }) => {
    return (
        <li className={styles.word}>
            <span>{word}</span>
            <span>+{word.length}</span>
        </li>
    );
};
