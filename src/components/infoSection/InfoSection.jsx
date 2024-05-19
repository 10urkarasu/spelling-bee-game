import React from "react";
import styles from "./infoSection.module.css";
import { WordList } from "../wordList/WordList";

const InfoSection = () => {
    return (
        <aside>
            <WordList />
        </aside>
    );
};

export default InfoSection;
