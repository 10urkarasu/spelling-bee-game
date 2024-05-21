import React from "react";
import { WordList } from "../wordList/WordList";
import Timer from "../timer/Timer";
import Score from "../score/Score";
import styles from "./infoSection.module.css";

const InfoSection = () => {
    return (
        <aside className={styles.infoSection}>
            <WordList />
            <Timer />
            <Score type={"scoreInfo"} />
        </aside>
    );
};

export default InfoSection;
