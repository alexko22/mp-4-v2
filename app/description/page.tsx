// Alex Olson | alexko@bu.edu | MP-4
// app/description/page.tsx
// secondary page with some info on my API and some fun facts

// needed this for my styling components to work (switched to tailwind anyway)
"use client";

// main secondary page function with some description of my API and fun facts...
export default function Desc() {

    return (
        <div className="flex w-3/4 m-auto flex-col align-items-center bg-amber-100">
            <header className="bg-gray-900 p-5 text-center">
                <title> MP-4 | CS391A </title>
                <h1 className="text-4xl text-white"> Lingua Robot API Call </h1>
            </header>
            <h1 className="text-center p-4 text-black font-sans text-4xl"> About the API: </h1>
            <p className="text-black p-5 text-2xl"> Lingua API is an English dictionary API that allows one to search up any word in the dictionary and retrieve definitions, parts of speech, examples, and more. The data I displayed just utilizes a small portion of what is possible with this API. The API is free, but if you go over 2500 requests/day you will be charged $0.004 for each additional call so be careful! </p>
            <h1 className="text-center p-4 text-black font-sans text-4xl"> Fun Facts: </h1>
            <ul className="p-5">
                <li className="text-center p-4 text-black font-sans text-2xl"> Some words have multiple definitions like the car example from this assignment! </li>
                <li className="text-center p-4 text-black font-sans text-2xl"> Over 30% of English words are derived from another language. </li>
                <li className="text-center p-4 text-black font-sans text-2xl"> Most dictionaries list that there are just shy of 200,000 English Words. </li>
                <li className="text-center p-4 text-black font-sans text-2xl"> Around 1.5 billion people speak English worldwide. </li>
                <li className="text-center p-4 text-black font-sans text-2xl"> English is just one of over 7000 human languages! </li>
            </ul>
        </div>
    );
}