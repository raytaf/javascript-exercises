/* --------------------------------------------------------------- EXTEND THE GLOBAL ARRAY OBJECT */
Array.prototype.isEqual = function (arr, ignoreOrder = false) {
    return ignoreOrder ?
        this.sort().toString() === arr.sort().toString() :
        this.toString() === arr.toString()
}

/* Extend the Global Array Object --------------------------------------------------------------- */
[1, 2, 3].isEqual([1, 2, 3]) // Expected Result true

[1, 2, 3].isEqual([1, 3, 2]) // Expected Result false

[1, 2, 3].isEqual([1, 3, 2], true) // Expected Result true