/* --------------------------------------------------------------- TRIANGLE */
const triangle = p => {
    const arr = Array(p).fill().map(v => Array(p + p - 1).fill(' '))
    arr.forEach((v, k) => {
        if (k === p - 1)
            arr[k] = v.map((sv, sk) => sk % 2 === 0 ? '*' : ' ')
        else
            [v[(p - 1) - k], v[(p - 1) + k]] = ['*', '*']
    })
    return '\n' + arr.map(v => v.join``).join('\n') + '\n'
}

/* Check Triangle --------------------------------------------------------------- */
triangle(5) // Expected Result
//        *    
//       * *   
//      *   *  
//     *     * 
//    * * * * *