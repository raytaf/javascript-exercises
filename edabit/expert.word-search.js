/* --------------------------------------------------------------- WORD SEARCH */
/* - https://edabit.com/challenge/x3XbfkKTjj4rr45Xi */
const wordSearch = (letters, words) => {
    let lengthMatch = 0
    let horzLetters = letters.match(/.{1,8}/g)
    let horzReverse = horzLetters.map( v => v.split('').reverse().join(''))
    let arryLetters = horzLetters.map( v => v.split(''))
    let vertLetters = arryLetters[0].map( (v, i) => JSON.stringify(arryLetters.map(sv => sv[i])).replace(/\W/g, '') )
    let vertReverse = vertLetters.map( v => v.split('').reverse().join(''))

    words.map( v => v.toUpperCase() ).forEach( e => {
        [...horzLetters, ...vertLetters, ...horzReverse, ...vertReverse].forEach( v => {
            if (v.includes(e)) {
                lengthMatch += 1
                words.splice(words.indexOf(e), 1)
            }
        })
    })
    
    if (lengthMatch === words.length)
        return true
    else
        return false
}

/* Check Word Search --------------------------------------------------------------- */
wordSearch(
    "PSUWHATSLPACKAGENYOLRDVLFINGEZBMIREHQNJOATBVGYESJDUWUESTPSTICKEY",
    ["stick", "most", "key", "vein", "yes", "package", "tube", "target", "elm", "spy"]
)

// TODO : Masih kurang dibagian mencari kata secara diagonal (VEIN & TARGET)
