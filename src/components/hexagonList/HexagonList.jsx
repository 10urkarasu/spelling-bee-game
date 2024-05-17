import React from "react";
import styles from "./hexagonList.module.css";
import Hexagon from "../hexagon/Hexagon";

const HexagonList = () => {
    return (
        <div className={styles.hexagonList}>
            <div className={styles.dual}>
                <Hexagon />
                <Hexagon />
            </div>
            <div className={styles.triple}>
                <Hexagon />
                <Hexagon />
                <Hexagon />
            </div>
            <div className={styles.dual}>
                <Hexagon />
                <Hexagon />
            </div>
        </div>
    );
};

export default HexagonList;
