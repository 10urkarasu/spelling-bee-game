import { NextResponse } from "next/server";
import fs from "fs/promises";

export const GET = async () => {
    try {
        const data = await fs.readFile("data/languages.json", "utf-8");
        const languages = JSON.parse(data).languages;
        const abbreviations = Object.values(languages).map(
            (language) => language.abbreviation
        );
        return new NextResponse(JSON.stringify(abbreviations), {
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
