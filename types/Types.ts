// Alex Olson | alexko@bu.edu | MP-4
// Types.ts (defines the relevant type for my API)
// adapted directly from the fixed code the professor helped me with via email...

// Sense definition
export type Sense = {
    definition: string;
};

// Lexeme definition
export type Lexeme = {
    partOfSpeech: string;
    senses: Sense[];
};

// Entry definition
export type Entry = {
    entry: string;
    lexemes: Lexeme[];
};

