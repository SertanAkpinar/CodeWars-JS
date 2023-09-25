/*
* AUFGABE
prüfe ob eine Zahl Narzistisch ist. D. h.
Bsp die Zahl 153
Länge 3
also: 1^3 5^3 3^3 und die Ergebnisse addieren
wenn die Zahl 153 ergibt ist es narzistisch also true wenn nbicht false
 */

function narcissistic(value){

    var valueString = value.toString()
    var valueCount = valueString.length
    var realDigits = valueString.split('').map(Number)
    realDigits = realDigits.map(element => Math.pow(element, valueCount));
    var sum = realDigits.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    if(sum === value){
        return true
    }
    return false
}

narcissistic(153)


//DENKEN
// die Zahl teilen in einzelne
// alle Zahlen in eine Liste 
// jede zahl mit valueCount multiplizieren
// dann die Ergebnisse addieren
// vergleichen mit Value


//_____________ Nummer 1 Lösung ______________
// function narcissistic( value ) {
//     return ('' + value).split('').reduce(function(p, c){
//       return p + Math.pow(c, ('' + value).length)
//       }, 0) == value;
//   }