/* --------------------------------------------------------------- FISCAL CODE */
/* - https://edabit.com/challenge/Pa2rHJ6KeRBTF28Pg */
const months = { 1: "A", 2: "B", 3: "C", 4: "D", 5: "E", 6: "H", 7: "L", 8: "M", 9: "P", 10: "R", 11: "S", 12: "T" }

const fiscalCode = (person) => {
    let consonants = (param) => param.toUpperCase().replace(/[AIUEO]/g, '')
    let vowels     = (param) => param.toUpperCase().replace(/[^AIUEO]/g, '')
    let consVow    = (param) => (consonants(param) + vowels(param) + 'X').substring(0, 3)

    let surname = (() => consVow(person.surname)) ()
    let name    = (() => {
        let consName = consonants(person.name)
        return consName.length > 3 ? consName.charAt(0) + consName.charAt(2) + consName.charAt(3) : consVow(person.name)
    }) ()
    let dob     = (() => {
        let [d, m, y] = person.dob.split('/')
        return y.slice(-2) + months[m] + (person.gender === 'F' ? +d+40 : `0${d}`.slice(-2))
    }) ()
    
    return surname + name + dob
}

/* Check Fiscal Code --------------------------------------------------------------- */
fiscalCode({
    name: "Matt",
    surname: "Edabit",
    gender: "M",
    dob: "1/1/1900"
}) // should return "DBTMTT00A01"

fiscalCode({
    name: "Helen",
    surname: "Yu",
    gender: "F",
    dob: "1/12/1950"
}) // should return "YUXHLN50T41"

fiscalCode({
    name: "Mickey",
    surname: "Mouse",
    gender: "M",
    dob: "16/1/1928"
}) // should return "MSOMKY28A16"
