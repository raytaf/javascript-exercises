/* --------------------------------------------------------------- WORDS WITH DUPLICATE LETTERS */
/* - ttps://edabit.com/challenge/ztJZiCZeXATC9KDHX */
const noDuplicateLetters = (phrase) => {
    const phrArr = phrase.replace(/[^\w\s]/gi, '').toLowerCase().split(' ').map(v => v.split('').sort())
    return phrArr.every(v => v.every((sv, sk) => sk > 0 ? sv !== v[sk - 1] : true ))
}

/* Check Words with Duplicate Letters --------------------------------------------------------------- */
noDuplicateLetters("Fortune favours the bold.") // true

noDuplicateLetters("You can lead a horse to water, but you can't make him drink.") // true

noDuplicateLetters("Look before you leap.") // false
// Duplicate letters in "Look" and "before".

noDuplicateLetters("An apple a day keeps the doctor away.") // false
// Duplicate letters in "apple", "keeps", "doctor", and "away".