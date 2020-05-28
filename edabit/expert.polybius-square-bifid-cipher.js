/* --------------------------------------------------------------- POLYBIUS SQUARE - BIFID CIPHER */
/* - https://edabit.com/challenge/RHpTdvSgKaHmts6z7 */
const bifid = (text) => {
    const alphabet = 'abcdefghiklmnopqrstuvwxyz'
    const newText = text.toLowerCase().replace(/[\W_]+/g, '').replace('j', 'i')

    let pairs = [[], []]
    for (const v of newText) {
        const i = alphabet.indexOf(v)
        pairs[0].push(Math.floor(i / 5) + 1)
        pairs[1].push(i % 5 + 1)
    }

    if ( ! /\s/.test(text)) {
        pairs = pairs[0].map((v, i) => [v, pairs[1][i]])
        const secondPairs = pairs.flat()
        const firstPairs = secondPairs.splice(0, secondPairs.length / 2)
        pairs = firstPairs.map((v, i) => [v, secondPairs[i]])
    }

    return pairs.flat().join('')
        .match(/.{1,2}/g)
        .map(v => alphabet.charAt((parseInt(v[0]) - 1) * 5 + parseInt(v[1]) - 1))
        .join('')
}

/* Check Polybius Square - Bifid Cipher --------------------------------------------------------------- */
bifid("I killed Mufasa!") // Expected Result "ghlcrddyaykal"

bifid("ghlcrddyaykal") // Expected Result "ikilledmufasa"