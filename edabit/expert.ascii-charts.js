/* --------------------------------------------------------------- ASCII CHARTS */
/* - https://edabit.com/challenge/iXmbCZMYPukzztpBq */
const columnChart = (productA, productB, target) => {
    let result = '   | Mo Tu We Th Fr Sa Su |'
    for (let i = 10; i <= Math.max(...target) + 10; i += 10) {
        result = `${i} | `.concat(productA.map((v, k) => 
            v - i >= 0 ? '++' :
                productB[k] + v - i >= 0 ? '**' :
                    target[k] + 10 === i ? '__' : '  '
        ).join(' '), ` |\n${result}`)
    }
    return result
}

/* Check ASCII Charts --------------------------------------------------------------- */
columnChart(
    [30, 20, 10, 30, 10, 20, 10],
    [20, 10, 10, 10, 20, 0, 10],
    [50, 40, 20, 40, 30, 30, 40]
) /*Expected Result
    60 | __                   |
    50 | ** __    __       __ |
    40 | **       ** __ __    |
    30 | ++ ** __ ++ **       |
    20 | ++ ++ ** ++ ** ++ ** |
    10 | ++ ++ ++ ++ ++ ++ ++ |
       | Mo Tu We Th Fr Sa Su |  
*/

columnChart(
    [40, 60, 20, 40, 50, 40, 20],
    [40, 20, 30, 0, 0, 0, 10],
    [80, 80, 80, 40, 50, 70, 50]
) //Expected Result:
    // '90 | __ __ __             |\n' +
    // '80 | ** **          __    |\n' +
    // '70 | ** **                |\n' +
    // '60 | ** ++       __    __ |\n' +
    // '50 | ** ++ ** __ ++       |\n' +
    // '40 | ++ ++ ** ++ ++ ++    |\n' +
    // '30 | ++ ++ ** ++ ++ ++ ** |\n' +
    // '20 | ++ ++ ++ ++ ++ ++ ++ |\n' +
    // '10 | ++ ++ ++ ++ ++ ++ ++ |\n' +
    // '   | Mo Tu We Th Fr Sa Su |'