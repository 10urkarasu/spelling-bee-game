import { NextResponse } from "next/server";
import fs from "fs/promises";

export const GET = async () => {
    try {
        const data = await fs.readFile("data/languages.json", "utf-8");
        const languages = JSON.parse(data).languages;
        return new NextResponse(JSON.stringify(languages), {
            status: 200,
        });
    } catch (err) {
        console.log(err);
        return new NextResponse(
            JSON.stringify(
                { message: "Something went wrong!" },
                { status: 500 }
            )
        );
    }
};
