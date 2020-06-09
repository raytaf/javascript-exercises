/* --------------------------------------------------------------- WORDS WITH DUPLICATE LETTERS */
/* - ttps://edabit.com/challenge/ztJZiCZeXATC9KDHX */
const noDuplicateLetters = p => p.toLowerCase().split(' ').every(v => new Set(v).size === v.length)

/* Check Words with Duplicate Letters --------------------------------------------------------------- */
noDuplicateLetters("Fortune favours the bold.") // true

noDuplicateLetters("You can lead a horse to water, but you can't make him drink.") // true

noDuplicateLetters("Look before you leap.") // false
// Duplicate letters in "Look" and "before".

noDuplicateLetters("An apple a day keeps the doctor away.") // false
// Duplicate letters in "apple", "keeps", "doctor", and "away".