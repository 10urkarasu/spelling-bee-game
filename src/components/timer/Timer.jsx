"use client";

import { useGame } from "@/context/gameContext";
import { useEffect } from "react";

function Timer() {
    const { secondsRemaining, setSeconds } = useGame();

    const mins = Math.floor(secondsRemaining / 60);
    const seconds = secondsRemaining % 60;

    useEffect(function () {
        const id = setInterval(function () {
            setSeconds();
        }, 1000);
        return () => clearInterval(id);
    }, []);
    return (
        <div className="timer">
            {mins < 10 && "0"}
            {mins} : {seconds < 10 && "0"}
            {seconds}
        </div>
    );
}

export default Timer;
