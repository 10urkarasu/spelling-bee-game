"use client";
import React, { useEffect } from "react";
import { useParams } from "next/navigation";

import { useGame } from "@/context/gameContext";

const Page = () => {
    const params = useParams();
    const { setCurrentLanguage } = useGame();

    useEffect(() => {
        setCurrentLanguage(params.slug[0]);
    }, []);

    return <></>;
};

export default Page;
