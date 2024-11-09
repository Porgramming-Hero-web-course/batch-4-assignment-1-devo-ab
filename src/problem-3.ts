{
    // Problem-3 (Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.)

    const countWordOccurrences = (sentence : string, word : string) : number => {
        const sentenceArray = sentence.toLowerCase();
        const wordsArray = sentenceArray.split(" ");
        const targetWord = word.toLowerCase();

        const numWords = wordsArray.filter(currentWords => currentWords === targetWord);
        return numWords.length;
    };

    const sentenceWords = countWordOccurrences("I love typescript", "typescript");
    console.log(sentenceWords);
}