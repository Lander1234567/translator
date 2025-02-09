// Runic Teben Translator

// Runic Teben Alphabet
const runicAlphabet = {
    "A": "ᚨ", "R": "ᚱ", "K": "ᚲ", "G": "ᚷ", "W": "ᚹ", "H": "ᚺ", "N": "ᚾ",
    "B": "ᛒ", "E": "ᛖ", "M": "ᛗ", "T": "ᛏ", "L": "ᛚ", "O": "ᛟ", "C": "ᚳ",
    "Y": "ᛇ", "D": "ᛞ", "P": "ᛈ", "S": "ᛋ", "V": "ᚡ", "J": "ᛃ",
    " ": " "
};

// Basic Vocabulary
const runicVocabulary = {
    "earth": "ᚨᚱᛖ", "water": "ᚹᚨᛏᚨ", "fire": "ᚠᛁᚱᛖ", "air": "ᚨᛁᚱ",
    "plant": "ᛈᛚᚨᚾᛏ", "seed": "ᛋᛖᚨᛞ", "sky": "ᛋᚳᚣ", "spirit": "ᛋᛈᛁᚱᛏ",
    "mountain": "ᛗᚨᚢᚾᛏᚨᛁᚾ", "magic": "ᛗᚨᚷᛁᚲ", "life": "ᛚᛁᚠᛖ", "death": "ᛞᛖᚨᛏᚺ",
    "harmony": "ᚺᚨᚱᛗᛟᚾᛁ", "strength": "ᛋᚳᚱᛖᚨᛏᚺ", "peace": "ᛈᛖᚨᚲᛖ", "wisdom": "ᚹᛁᛋᛞᛟᛗ",
    "journey": "ᛃᛟᚢᚾᛖᚨ", "friend": "ᚠᚱᛁᛖᚾᛞ", "love": "ᛚᛟᚢᛖ", "offer": "ᛟᚠᛖᚱ",
    "to speak": "ᛋᛈᛖᚨᚲ", "to listen": "ᛚᛁᛋᛖᚾ", "to grow": "ᚷᚱᛟᚹ", "hello": "ᚺᛖᛚᛚᛟ",
    "yes": "ᛇᛖᛋ", "no": "ᚾᛟ", "thank you": "ᛏᚺᚨᚾᚲ ᚤᛟᚢ", "how are you": "ᚺᛟᚹ ᚨᚱᛖ ᛇᚢ",
    "my name is": "ᛗᚨᚤ ᚾᚨᛗᛖ ᛁᛋ"
};

// Function to translate English text to Runic Teben
function translateToRunic() {
    const inputText = document.getElementById("inputText").value;
    const words = inputText.toLowerCase().split(" ");
    let translatedWords = [];

    for (let word of words) {
        if (runicVocabulary[word]) {
            translatedWords.push(runicVocabulary[word]);
        } else {
            let translatedWord = "";
            for (let char of word.toUpperCase()) {
                translatedWord += runicAlphabet[char] || char;
            }
            translatedWords.push(translatedWord);
        }
    }

    document.getElementById("outputText").value = translatedWords.join(" ");
}

// Function to translate Runic Teben text to English
function translateToEnglish() {
    const inputText = document.getElementById("outputText").value;
    const words = inputText.split(" ");
    let translatedWords = [];

    for (let word of words) {
        for (let engWord in runicVocabulary) {
            if (runicVocabulary[engWord] === word) {
                translatedWords.push(engWord);
                break;
            }
        }

        let translatedWord = "";
        for (let char of word) {
            for (let engChar in runicAlphabet) {
                if (runicAlphabet[engChar] === char) {
                    translatedWord += engChar.toLowerCase();
                    break;
                }
            }
        }
        translatedWords.push(translatedWord);
    }

    document.getElementById("inputText").value = translatedWords.join(" ");
}