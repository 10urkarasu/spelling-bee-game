"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const getData = async () => {
    const res = await fetch(`http://localhost:3000/api/languages`, {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed");
    }
    return res.json();
};

const Page = () => {
    const router = useRouter();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getData();
                router.push(`/${data[0]}`);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, [router]);

    return <div>Yönlendiriliyor</div>;
};

export default Page;
