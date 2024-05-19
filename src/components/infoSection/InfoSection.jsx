import React from "react";
import styles from "./infoSection.module.css";
import { WordList } from "../wordList/WordList";
import Timer from "../timer/Timer";
import Score from "../score/Score";

const InfoSection = () => {
    return (
        <aside>
            <WordList />
            <Timer />
            <Score />
        </aside>
    );
};

export default InfoSection;
