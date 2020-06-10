/* --------------------------------------------------------------- REPLACING LETTERS WITH HASHES */
/* - https://edabit.com/challenge/2kentanhDPfDNfXG4 */
const replace = (s, r) => {
    const replacer = r.split('-').map(v => v.charCodeAt(0))
    return s.split('').map(v => v.charCodeAt(0) >= replacer[0] && v.charCodeAt(0) <= replacer[1] ? '#' : v).join('')
}

/* Check Replacing Letters with Hashes --------------------------------------------------------------- */
replace("abcdef", "c-e") // Expected Result "ab###f"

replace("rattle", "r-z") // Expected Result "#a##le"

replace("microscopic", "i-i") // Expected Result "m#croscop#c"

replace("", "a-z") // Expected Result ""