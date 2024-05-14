import { NextResponse } from "next/server";
import fs from "fs/promises";
import { selectRandomElements } from "@/helper/helper";

export const GET = async (req, { params }) => {
    //Türk alfabesine ait 7 harf istendiğinde => http://localhost:3000/api/letters/tr/7
    const language = params.slug[0];
    const count = params.slug[1];

    try {
        const data = await fs.readFile("data/languages.json", "utf-8");
        const languages = JSON.parse(data).languages;

        const filteredLanguage = Object.values(languages).filter((item) => {
            return item.abbreviation === language;
        });
        // Alfabedeki sesli harf sayısı istenilen harf sayısına uygun mu ?
        const firstHalf =
            Math.floor(count / 2) <= filteredLanguage[0].alphabet.vowels.length
                ? Math.floor(count / 2)
                : filteredLanguage[0].alphabet.vowels.length;
        const secondHalf = count - firstHalf;
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
