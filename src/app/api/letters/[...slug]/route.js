import { NextResponse } from "next/server";
import fs from "fs/promises";
import { selectRandomElements } from "@/helper/helper";

export const GET = async (req, { params }) => {
    const language = params.slug[0];
    const count = params.slug[1];
    const firstHalf = Math.floor(count / 2);
    const secondHalf = count - firstHalf;
    try {
        const data = await fs.readFile("data/languages.json", "utf-8");
        const languages = JSON.parse(data).languages;

        const filteredLanguage = Object.values(languages).filter((item) => {
            return item.abbreviation === language;
        });

        const vowels = selectRandomElements(
            filteredLanguage[0].alphabet.vowels,
            firstHalf
        );
        const consonants = selectRandomElements(
            filteredLanguage[0].alphabet.consonants,
            secondHalf
        );

        return new NextResponse(JSON.stringify([...vowels, ...consonants]), {
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
