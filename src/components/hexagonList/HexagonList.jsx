"use client";

import React from "react";
import { useGame } from "@/context/gameContext";
import Hexagon from "../hexagon/Hexagon";
import styles from "./hexagonList.module.css";

const HexagonList = () => {
    const { letters } = useGame();
    const hexagonGroups = [];
    let rowCount = 3;

    for (let i = 0; i < letters.length; i += rowCount) {
        rowCount = rowCount === 2 ? 3 : 2;
        const group = letters.slice(i, i + rowCount);
        hexagonGroups.push(group);
    }

    return (
        <div className={styles.hexagonList}>
            {hexagonGroups.map((group, index) => (
                <div
                    key={index}
                    className={group.length === 3 ? styles.triple : styles.dual}
                >
                    {group.map((letter, subIndex) => (
                        <Hexagon letter={letter} key={subIndex} />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default HexagonList;
