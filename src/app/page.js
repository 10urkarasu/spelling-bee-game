"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useGame } from "@/context/gameContext";

const Page = () => {
    const router = useRouter();
    const { languages } = useGame();

    useEffect(() => {
        const fetchData = async () => {
            try {
                router.push(`/${languages[0]}`);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, [router, languages]);

    return <div>Yönlendiriliyor</div>;
};

export default Page;
