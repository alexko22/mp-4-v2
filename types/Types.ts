
export type Sense = {
    definition: string;
};

export type Lexeme = {
    partOfSpeech: string;
    senses: Sense[];
};

export type Entry = {
    entry: string;
    lexemes: Lexeme[];
};

