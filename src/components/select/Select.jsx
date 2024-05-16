import React from "react";
import styles from "./select.module.css";

export const Select = () => {
    return (
        <div>
            <select className={styles.select}>
                <option value="option1">Seçenek 1</option>
                <option value="option2">Seçenek 2</option>
                <option value="option3">Seçenek 3</option>
                <option value="option4">Seçenek 4</option>
            </select>
        </div>
    );
};
