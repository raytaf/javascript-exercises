/* --------------------------------------------------------------- STRIPPING A SENTENCE DOWN */
/* - https://edabit.com/challenge/tgSGGGbS6x9foafg9 */
const stripSentence = (str, chars) => str.split('').filter(v => ! chars.includes(v)).join('')

/* Check Stripping a Sentence Down --------------------------------------------------------------- */
stripSentence("the quick brown fox jumps over the lazy dog", "aeiou") // Expected Result "th qck brwn fx jmps vr th lzy dg"

stripSentence("the hissing snakes sinisterly slither across the rustling leaves", "s") // Expected Result "the hiing nake initerly lither acro the rutling leave"

stripSentence("gone, reduced to atoms", "go, muscat nerd") // Expected Result ""