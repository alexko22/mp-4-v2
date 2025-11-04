// Alex Olson | alexko@bu.edu | MP-4
// app/page.tsx (makes the API call to retrieve data)
// main page adapted closely from the professor's class demo...

import getData from "@/lib/getData";
import {Entry, Lexeme, Sense} from "@/types/Types";
import { Link } from "react-router-dom";

export default async function Home() {
    const data = await getData();

    return (
        <div className="flex w-3/4 m-auto flex-col align-items-center bg-amber-100">
            <header className="bg-gray-900 p-5 text-center">
                <title> MP-4 | CS391A </title>
                <h1 className="text-4xl text-white"> Lingua Robot API Call </h1>
            </header>
            <h1 className="text-center p-4 text-black font-sans text-4xl"> Examples: </h1>
            <div className="flex flex-col align-items-center p-4">
            {
                data.map((entry: Entry, i: number) =>
                    (
                        <div className="flex flex-col align-items-center bg-amber-100" key={i}>
                            <h2 className="text-black p-4 text-4xl"> {entry.entry} </h2>
                            {
                                entry.lexemes.map((lex: Lexeme, j: number) =>
                                    (
                                        <div className="flex flex-col align-items-center bg-amber-100" key={j}>
                                            <h3 className="text-gray-800 text-2xl"> {lex.partOfSpeech} </h3>
                                            {
                                                lex.senses.map((sense: Sense, k: number) =>
                                                    (
                                                        <div className="flex flex-col align-items-center bg-amber-100" key={k}>

                                                            <p className="text-black"> {sense.definition} </p>
                                                        </div>
                                                    )
                                                )
                                            }
                                        </div>
                                    )
                                )
                            }
                        </div>
                    )
                )
            }
            </div>
        </div>
    );
}
