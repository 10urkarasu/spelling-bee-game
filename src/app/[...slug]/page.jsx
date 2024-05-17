"use client";

import { useGame } from "@/context/gameContext";
import React, { useEffect } from "react";
import { useParams, isLoading } from "next/navigation";

const Page = () => {
    const params = useParams();
    const { setCurrentLanguage } = useGame();

    useEffect(() => {
        setCurrentLanguage(params.slug[0]);
    }, []);

    return <></>;
};

export default Page;
