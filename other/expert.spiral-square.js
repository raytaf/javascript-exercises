/* --------------------------------------------------------------- SPIRAL SQUARE */
const makeSpiralSquare = p => {
    const arr = Array(p).fill().map(() => Array(p).fill(' '))
    for (i = 0, j = 0; i <= Math.floor(p / 4); i += 1, j+= 2) {
        if (i !== Math.floor(p / 4) || p % 4 >= 1) {
            for (const [k] of arr[j].entries()) {
                if (k > (j - 1) && k < (p - (j - 1))) arr[j][k] = '*'
            }
        }
        if (i !== Math.floor(p / 4) || p % 4 >= 2 || p % 4 === 0) {
            for (const [k] of arr.entries()) {
                if (k > (j - 1) && k < (p - j)) arr[k][j] = '*'
            }
        }
        if (i !== Math.floor(p / 4) || p % 4 >= 3 || p % 4 === 0) {
            for (const [k] of arr[p - (j + 1)].entries()) {
                if (k > (j - 1) && k < (p - j)) arr[p - (j + 1)][k] = '*'
            }
        }
        if (i !== Math.floor(p / 4) || p % 4 === 0) {
            for (const [k] of arr.entries()) {
                if (k > (j + 1) && k < (p - j)) arr[k][p - (j + 1)] = '*'
            }
        }
    }
    return '\n' + arr.map(v => v.join(' ')).join('\n') + '\n'
}

/* Check Spiral Square --------------------------------------------------------------- */
makeSpiralSquare(7) // Expected Result
//    * * * * * * *
//    *            
//    *   * * * * *
//    *   *       *
//    *   * * *   *
//    *           *
//    * * * * * * *