// Alex Olson | alexko@bu.edu | MP-4
// getData.ts (makes the API call to retrieve data)
// followed closely from the professor's class demo...

// retrieving the API key from the hidden .env file like in demo...
const API_KEY = process.env.D_API_KEY;

// main async getData() function to make the API call...
export default async function getData() {
    // just going to retrieve the info for a few random words
    const sample = ["car", "train", "plane", "bus", "boat"];
    const word_list = []

    // making the call retrieving the dictionary info for each word in the list
    for (let i = 0; i < sample.length; i++) {
        // gets the current word
        const curr = sample[i];
        // using string interpolation based on the documentation of my API...
        const res = await fetch(`https://lingua-robot.p.rapidapi.com/language/v1/entries/en/${curr}`,
            {
                method: "GET",
                headers: {
                    // documentation shows to specify the key and the host...
                    // was getting error that API_KEY cannot be undefined, so I added !
                    "x-rapidapi-key": API_KEY!,
                    "x-rapidapi-host": 'lingua-robot.p.rapidapi.com',
                },
            }
        );
        // wait for the call to complete...
        const data = await res.json();
        // some words have multiple entries in the dictionary, so I had to push each individually to avoid errors
        // we have used this ... to flatten entries before, but I had to consult documentation
        word_list.push(...data.entries);

    }
    console.log(JSON.stringify(word_list[0], null, 2));
    // return the final word list
    return word_list;
}