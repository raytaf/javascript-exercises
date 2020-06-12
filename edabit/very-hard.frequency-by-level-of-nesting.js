/* --------------------------------------------------------------- FREQUENCY BY LEVEL OF NESTING */
/* - https://edabit.com/challenge/MCK2Rqzn78pMksvsK */
const freqCount = (arr, el) => {
    let freqArr = []
    let nestArr = arr

    for (let i = 0; nestArr.length; i++) {
        freqArr.push([i, nestArr.filter(v => v === el).length])
        nestArr = nestArr.filter(v => v[0] && v).flat(1)
    }

    return freqArr
}

/* Check Frequency by Level of Nesting --------------------------------------------------------------- */
freqCount([1, 4, 4, [1, 1, [1, 2, 1, 1]]], 1)
// Expected Result [[0, 1], [1, 2], [2, 3]]
// The array has one 1 at level 0, 2 1's at level 1, and 3 1's at level 2.

freqCount([1, 5, 5, [5, [1, 2, 1, 1], 5, 5], 5, [5]], 5)
// Expected Result [[0, 3], [1, 4], [2, 0]]

freqCount([1, [2], 1, [[2]], 1, [[[2]]], 1, [[[[2]]]]], 2)
// Expected Result [[0, 0], [1, 1], [2, 1], [3, 1], [4, 1]]
