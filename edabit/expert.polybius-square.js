/* --------------------------------------------------------------- POLYBIUS SQUARE */
/* - https://edabit.com/challenge/sGYuA9fEJLHqEBSjA */
const polybius = (text) => {
    const alphabet = 'abcdefghiklmnopqrstuvwxyz'
    const newText = text.toLowerCase().replace(/[^\w\s]/g, '').replace('j', 'i').split(' ')
    if (/\d/.test(newText)) {
        return newText.map(v =>
            v.match(/.{1,2}/g).map(sv => alphabet.charAt((parseInt(sv[0]) - 1) * 5 + parseInt(sv[1]) - 1)).join('')
        ).join(' ')
    } else {
        return newText.map(v =>
            v.split('').map(sv => {
                const i = alphabet.indexOf(sv)
                return `${Math.floor(i / 5) + 1}${i % 5 + 1}`
            }).join('')
        ).join(' ')
    }
}

/* Check Polybius Square --------------------------------------------------------------- */
polybius("Hi") // Expected Result "2324"

polybius("2324 4423154215") // Expected Result "hi there"

polybius("543445 14343344 522433 21422415331443 52244423 4311311114") // Expected Result "you dont win friends with salad"