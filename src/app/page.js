"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useGame } from "@/context/gameContext";
import Spinner from "@/components/spinner/Spinner";

const Page = () => {
    const router = useRouter();
    const { languages } = useGame();

    useEffect(() => {
        router.push(`/${languages[0]}`);
    }, [router, languages]);

    return <Spinner />;
};

export default Page;
