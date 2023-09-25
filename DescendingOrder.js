/**
 * AUFGABE:
 * eine Zahl nach größe sortieren
 */

function descendingOrder(n) {
    var nString = n.toString().split('').map(Number).sort(function (a, b) {
        return b - a
    })

    var sortedString = nString.join('');
    var sortedNumber = parseInt(sortedString);
    console.log(sortedNumber)
    return sortedNumber
}

descendingOrder(123)

/**
 * ______BESTE ANTWORT______
 
function descendingOrder(n){
  return parseInt(String(n).split('').sort().reverse().join(''))
}

 */
