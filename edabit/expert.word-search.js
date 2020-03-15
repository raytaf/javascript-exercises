/* --------------------------------------------------------------- WORD SEARCH */
/* - https://edabit.com/challenge/x3XbfkKTjj4rr45Xi */
const wordSearch = (letters, words) => {
    const cloneNestedArray      = param => param.map(v => [...v])
    const reverseNestedString   = param => param.map(v => v.split('').reverse().join(''))
    const generateDiagonalArray = param => {
        return [
            ...param.map(v => JSON.stringify(
                param.map((sv,i) => {
                    let val = sv[i]
                    sv.splice(i, 1)
                    return val
                })
            ).replace(/\W|null/g, '')),
            ...param.map(v => JSON.stringify(
                param.map((sv) => sv.pop())
            ).replace(/\W|null/g, ''))
        ]
    }

    const horizontal    = letters.match(/.{1,8}/g)
    const horizontalRev = reverseNestedString(horizontal)
    const arrayLetters  = horizontal.map(v => v.split(''))
    const vertical      = arrayLetters[0].map((v, i) => JSON.stringify(arrayLetters.map(sv => sv[i])).replace(/\W/g, ''))
    const verticalRev   = reverseNestedString(vertical)
    const diagonalBottomRight    = generateDiagonalArray(cloneNestedArray(arrayLetters))
    const diagonalBottomRightRev = reverseNestedString(diagonalBottomRight)
    const diagonalUpperRight     = generateDiagonalArray(cloneNestedArray(arrayLetters).reverse())
    const diagonalUpperRightRev  = reverseNestedString(diagonalUpperRight)

    let match = 0
    words.map(v => v.toUpperCase()).forEach(v => {
        if (
            [...horizontal,  ...horizontalRev, ...vertical, ...verticalRev,
                ...diagonalBottomRight, ...diagonalBottomRightRev, ...diagonalUpperRight, ...diagonalUpperRightRev
            ].find(sv => sv.includes(v)) !== undefined
        ) {
            match += 1
        }
    })

    if (match === words.length) return true
    else return false
}

/* Check Word Search --------------------------------------------------------------- */
wordSearch(
    "PSUWHATSLPACKAGENYOLRDVLFINGEZBMIREHQNJOATBVGYESJDUWUESTPSTICKEY",
    ["stick", "most", "key", "vein", "yes", "package", "tube", "target", "elm", "spy"]
)

// [
//     ["P","S","U","W","H","A","T","S"],
//     ["L","P","A","C","K","A","G","E"],
//     ["N","Y","O","L","R","D","V","L"],
//     ["F","I","N","G","E","Z","B","M"],
//     ["I","R","E","H","Q","N","J","O"],
//     ["A","T","B","V","G","Y","E","S"],
//     ["J","D","U","W","U","E","S","T"],
//     ["P","S","T","I","C","K","E","Y"]
// ]