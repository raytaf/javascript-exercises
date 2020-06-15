/* --------------------------------------------------------------- HOW MUCH IS TRUE? */
/* - https://edabit.com/challenge/GLbuMfTtDWwDv2F73 */
const countTrue = arr => arr.filter(v => v).length

/* Check How Much is True? --------------------------------------------------------------- */
countTrue([true, false, false, true, false]) // Expected Result 2

countTrue([false, false, false, false]) // Expected Result 0

countTrue([]) // Expected Result 0