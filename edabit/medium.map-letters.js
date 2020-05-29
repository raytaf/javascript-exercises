/* --------------------------------------------------------------- MAP THE LETTERS IN A STRING */
/* - https://edabit.com/challenge/Bd2jQS9xA6QecB34h */
const mapLetters = (word) => {
    const set = {}
    word.split``.forEach((v, k) => {
        set[v] === undefined ? set[v] = [k] : set[v].push(k)
    })
    return set
}

/* Check Map the Letters in a String --------------------------------------------------------------- */
mapLetters("dodo") // Expected Result { d: [0, 2], o: [1, 3] }

mapLetters("froggy") // Expected Result { f: [0], r: [1], o: [2], g: [3, 4], y: [5] }

mapLetters("grapes") // Expected Result { g: [0], r: [1], a: [2], p: [3], e: [4], s: [5] }

