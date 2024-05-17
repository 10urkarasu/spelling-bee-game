"use client";

import React from "react";
import styles from "./select.module.css";
import { useGame } from "@/context/gameContext";
import { useRouter } from "next/navigation";

export const Select = () => {
    const router = useRouter();
    const { languages, currentLanguage, setCurrentLanguage } = useGame();

    const handleChange = (event) => {
        setCurrentLanguage(event.target.value);
        router.push(`/${event.target.value}`);
    };

    return (
        <div>
            <select
                className={styles.select}
                value={currentLanguage}
                onChange={handleChange}
            >
                {languages.map((language, index) => (
                    <option key={index} value={language}>
                        {language}
                    </option>
                ))}
            </select>
        </div>
    );
};
