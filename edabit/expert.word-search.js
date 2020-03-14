/* --------------------------------------------------------------- WORD SEARCH */
/* - https://edabit.com/challenge/x3XbfkKTjj4rr45Xi */
const wordSearch = (letters, words) => {
    let store       = {
        match : 0,
        index : 0 // TODO : Bila pakai array map pada array diagonal mungkin bisa dihilangkan saja
    }

    let horzLetters = letters.match(/.{1,8}/g)
    let horzReverse = horzLetters.map(v => v.split('').reverse().join(''))
    let arrLetters  = horzLetters.map(v => v.split(''))
    let vertLetters = arrLetters[0].map((v, i) => JSON.stringify(arrLetters.map( sv => sv[i]) ).replace(/\W/g, ''))
    let vertReverse = vertLetters.map(v => v.split('').reverse().join(''))

    
    // TODO : Untuk sementara hanya bisa mencari teks secara diagonal ke kanan bawah dari array index ke-0 saja
    //        Masih bisa dioptimalkan menggunakan array map daripada menggunakan for
    let arrDiagonal = []
    for (let i = 0; i < arrLetters.length; i++) {
        for (let si = 0; si < arrLetters[0].length; si++) {
            if (arrLetters[i][store.index] !== undefined) {
                if (arrDiagonal[si] === undefined) arrDiagonal.push([])
                arrDiagonal[si].push(arrLetters[i][store.index])
            }
            if (si === arrLetters[0].length - 1) store.index = i
            store.index++
        }        
    }
    let dglRLetters = arrDiagonal.map(v => JSON.stringify(v).replace(/\W/g, ''))
    let dglRReverse = dglRLetters.map(v => v.split('').reverse().join(''))
    // END TODO :

    words.map( v => v.toUpperCase() ).forEach( v => {
        if ([...horzLetters, ...vertLetters, ...horzReverse, ...vertReverse].find( sv => sv.includes(v)) !== undefined) {
            store.match += 1
            words.splice(words.indexOf(v), 1)
        }
    })

    if (store.match === words.length)
        return true
    else
        return false
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