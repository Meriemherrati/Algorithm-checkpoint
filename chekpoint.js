function analyzeSentence(sentence) {
    let numChars = 0;
    let numWords = 0;
    let numVowels = 0;

    for (let i = 0; i < sentence.length; i++) {
        const c = sentence[i];

        // Count the number of characters
        numChars++;

        // Count the number of words
        if (c === ' ') {
            numWords++;
        }

        // Count the number of vowels
        if (c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u') {
            numVowels++;
        }
    }

    // Increment the number of words to account for the last word
    numWords++;

    console.log(`Number of characters: ${numChars}`);
    console.log(`Number of words: ${numWords}`);
    console.log(`Number of vowels: ${numVowels}`);
}

// Test the function with a sample sentence
analyzeSentence("This is a sample sentence.");

