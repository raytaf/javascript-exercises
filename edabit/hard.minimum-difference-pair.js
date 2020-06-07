/* --------------------------------------------------------------- MINIMUM DIFFERENCE */
/* - https://edabit.com/challenge/czFD8Y3E253eNCy8v */
const minDifferencePair = nums => {
    const result = [[], Infinity]
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i++) {
        const pair = [nums[i], nums[i + 1]]
        const diff = nums[i + 1] - nums[i]
        if (result[1] > diff) {
            result[0] = pair
            result[1] = diff
        }
    }    
    return result[0]
}
/* Check Minimum Difference Pair --------------------------------------------------------------- */
minDifferencePair([40, 16, 8, 17, 15]) // Expected Result [15, 16]

minDifferencePair([1, -31, -27, -18, -48, -15, -11, -34]) // Expected Result [-34, -31]

minDifferencePair([0, 2, 35, 42, 45, 14, -6, -1]) // Expected Result [-1, 0]

minDifferencePair([32, 33, 4, 6, 48, 18, 20, -7, -4, 31]) // Expected Result [31, 32]
