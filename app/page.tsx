// Alex Olson | alexko@bu.edu | MP-4
// app/page.tsx (makes the API call to retrieve data)
// main page adapted closely from the professor's class demo...


import getData from "@/lib/getData";
import {Entry, Lexeme, Sense} from "@/types/Types";

export default async function Home() {
    const data = await getData();

    return (
        <div className="flex w-3/4 m-auto flex-col items-center bg-amber-400">
            <h1> Lingua Robot API Example Call </h1>
            {
                data.map((entry: Entry, i: number) =>
                    (
                        <div key={i}>
                            <h2> {entry.entry} </h2>
                            {
                                entry.lexemes.map((lex: Lexeme, j: number) =>
                                    (
                                        <div key={j}>
                                            <p> {lex.partOfSpeech} </p>
                                            {
                                                lex.senses.map((sense: Sense, k: number) =>
                                                    (
                                                        <div key={k}>

                                                            <p> {sense.definition} </p>
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
    );
}
