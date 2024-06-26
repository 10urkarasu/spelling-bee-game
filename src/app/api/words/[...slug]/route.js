import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export const GET = async (req, { params }) => {
    //Türkçeye ait kelimeler sorgulandığında => http://localhost:3000/api/words/tr/exampleword
    const language = params.slug[0];
    const word = params.slug[1];
    try {
        const filePath = path.join(process.cwd(), "data", "languages.json");
        const data = await fs.readFile(filePath, "utf-8");
        const languages = JSON.parse(data).languages;

        const filteredLanguage = Object.values(languages).filter((item) => {
            return item.abbreviation === language;
        });

        return new NextResponse(
            JSON.stringify(
                filteredLanguage[0].words.includes(
                    word.toLocaleUpperCase(language)
                )
            ),
            {
                status: 200,
            }
        );
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
