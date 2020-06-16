/* --------------------------------------------------------------- LENGTH OF SORTING CYCLE */
/* - https://edabit.com/challenge/JYvEhPmdPNroCuw6E */
const cycleLength = (arr, n) => {
    const arrResult = [...arr]
    const arrSort = arr.sort((a, b) => a - b)

    let cycleCount = 0
    let indexArrResult = arrResult.indexOf(n)
    let indexArrSort = arrSort.indexOf(n)

    while (indexArrResult !== indexArrSort) {
        [arrResult[indexArrResult], arrResult[indexArrSort]] = [arrResult[indexArrSort], arrResult[indexArrResult]]
        cycleCount += 1
        indexArrResult = arrResult.indexOf(arrResult[indexArrResult])
        indexArrSort = arrSort.indexOf(arrResult[indexArrResult])
    }

    return cycleCount
}

/* Check Length of Sorting Cycle --------------------------------------------------------------- */
cycleLength([1, 5, 4, 3, 2, 6], 4) // Expected Result 1

cycleLength([1, 6, 7, 2, 4, 3, 8, 9, 5], 7) // Expected Result 7

cycleLength([43, 81, 88, 93, 17, 32, 19, 11], 93) // Expected Result 5

cycleLength([1, 6, 7, 2, 4, 3, 8, 9, 5], 1) // Expected Result 0
