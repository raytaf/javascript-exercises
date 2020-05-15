/* --------------------------------------------------------------- INTRO TO NESTED LOOPS  */
/* - https://edabit.com/challenge/spA7xt9pND22mNuWS */
const printAllGroups = () => {
    return [1, 2, 3, 4, 5, 6].map(v => ['a', 'b', 'c', 'd', 'e', 'f'].map(sv => `${v}${sv}`)).flat(2).join(', ')
}

const printDynamicGroups = (number, alphabet) => {
    const emptyArray = p => Array(p).fill()
    return emptyArray(number).map((v, k) =>
        emptyArray(alphabet).map((sv, sk) =>
            `${k + 1}${String.fromCharCode(sk + 97)}`
        )
    ).flat(2).join(', ')
}

/* Other Version */
function printAllGroupsUsingForOf() {
    let result = []
    for (let y of "123456") for (let c of "abcde") result.push(y+c)
    return result.join(', ')
}

function printAllGroupsUsingForIn() {
    const result = []
    for (let y in Array(6).fill())
        for (let c in Array(5).fill()) result.push(parseInt(y)+1 + String.fromCharCode(parseInt(c)+97))
    return result.join(', ')
}


/* Check Intro to Nested Loops --------------------------------------------------------------- */
printAllGroups() // Expected Result "1a, 1b, 1c, 1d, 1e, 2a, 2b, 2c, 2d, 2e, 3a, 3b, 3c, 3d, 3e, 4a, 4b, 4c, 4d, 4e, 5a, 5b, 5c, 5d, 5e, 6a, 6b, 6c, 6d, 6e"

printAllGroupsUsingForOf() // Expected Result "1a, 1b, 1c, 1d, 1e, 2a, 2b, 2c, 2d, 2e, 3a, 3b, 3c, 3d, 3e, 4a, 4b, 4c, 4d, 4e, 5a, 5b, 5c, 5d, 5e, 6a, 6b, 6c, 6d, 6e"

printAllGroupsUsingForIn() // Expected Result "1a, 1b, 1c, 1d, 1e, 2a, 2b, 2c, 2d, 2e, 3a, 3b, 3c, 3d, 3e, 4a, 4b, 4c, 4d, 4e, 5a, 5b, 5c, 5d, 5e, 6a, 6b, 6c, 6d, 6e"

printDynamicGroups(2, 9) // Expected Result "1a, 1b, 1c, 1d, 1e, 1f, 1g, 1h, 1i, 2a, 2b, 2c, 2d, 2e, 2f, 2g, 2h, 2i"