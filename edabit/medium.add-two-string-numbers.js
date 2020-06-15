/* --------------------------------------------------------------- ADD TWO STRING NUMBERS */
/* - https://edabit.com/challenge/3q6tbKL8BS4CgaR4c */
const addStrNums = (num1, num2) => (
	isNaN(num1) || isNaN(num2) ? "-1" : `${BigInt(num1) + BigInt(num2)}`
)

/* Check Add Two String Numbers --------------------------------------------------------------- */
addStrNums("4", "5") // Expected Result "9"

addStrNums("abcdefg", "3") // Expected Result "-1"

addStrNums("1", "") // Expected Result "1"

addStrNums("1874682736267235927359283579235789257", "32652983572985729") // Expected Result 1874682736267235927391936562808774986