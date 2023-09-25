/**
 * AUFGABE:
 * die letzten 4 Zahlen sollenm gezeigt werden der REst soll ein # werden
 */

function maskify(cc) {
    var ccString = cc.toString()
    var ccLength = ccString.length - 4

    if (ccLength <= 0) {
        return ccString
    }
    var newCC = "#".repeat(ccLength) + ccString.slice(-4);
    return newCC

}

maskify(1)

/**
 * Länge von cc bestimmen
 * Länge -4
 * alle in nde rminus Länge zu # ändern
 * neue Varable hinzufügen
 */

/**
 * _______BESTE LÖSUNG______
 * 
 function maskify(cc) {
  return cc.slice(-4).padStart(cc.length,'#')
}

 */