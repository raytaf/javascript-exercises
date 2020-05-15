/* --------------------------------------------------------------- SKIP THE DRINKS WITH TOO MUCH SUGAR  */
/* - https://edabit.com/challenge/dgf76hmQ5Yw4FATFi */
const skipTooMuchSugarDrinks = drinks => drinks.filter(v => v !== 'cola' && v !== 'fanta')

/* Check Skip the Drinks with Too Much Sugar --------------------------------------------------------------- */
skipTooMuchSugarDrinks(["fanta", "cola", "water"]) // Expected Result : [water]

skipTooMuchSugarDrinks(["fanta", "cola"])  // Expected Result :  []

skipTooMuchSugarDrinks(["lemonade", "beer", "water"])  // Expected Result :  ["lemonade", "beer", "water"]