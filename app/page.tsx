// Alex Olson | alexko@bu.edu | MP-4
// app/page.tsx (content for the default landing page)
// main page adapted closely from the professor's class demo and later assistance...

// imports
import getData from "@/lib/getData";
import {Entry, Lexeme, Sense} from "@/types/Types";

// main home function that calls the getData() function
// async as to await getData()'s completion...
// mapping in a way similar to the Book example in lecture, adjusted for my API...
export default async function Home() {
    const data = await getData();

    // often referenced the provided webstorm documentation for tailwind syntax options...
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
