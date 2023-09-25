/**
 * AUFGABE:
 * vergleiche beide arrays
 * finde heraus ob beide arrays gleich in dem Sinne sind bsp:
 * Array 1 hat den Wert 3
 * Array 2 hat den Wert 9
 * 3*3 = 9
 * also schau ob jeder wert in array1  mit sich selber multipliziert 
 in array2 enthalten ist
 */


function comp(array1, array2) {
    if (array1 === null || array2 === null || array1.length !== array2.length) {
        return false
    }

    var squaredArray1 = array1.map(x => x * x).sort();
    var sortedArray2 = array2.sort();

    for (var i = 0; i <= squaredArray1.length; i++) {
        if (squaredArray1[i] !== sortedArray2[i]) {
            return false
        }
    }
    return true
}

var arrayOne = [121, 144, 19, 161, 19, 144, 19, 11]
var arrayTwo = [231, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(arrayOne, arrayTwo)