import React from "react";
import styles from "./hexagon.module.css";

const Hexagon = ({ letter }) => {
    return (
        <div className={styles.wrapper}>
            <span className={styles.hexagon}>&#x2B22;</span>
            <span className={styles.letter}>{letter}</span>
        </div>
    );
};

export default Hexagon;
