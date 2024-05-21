import React from "react";
import styles from "./button.module.css";

export const Button = ({ type, text, onClick }) => {
    return (
        <button onClick={onClick} className={styles[type]}>
            {text}
        </button>
    );
};
