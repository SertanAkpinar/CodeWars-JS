/**
 * AUFGABE:
 * Für jedes Wort in dem String den ersten Buchstaben ans Ende tun
 * und ein ay hinzufügen
 */

function pigIt(str) {
    var newStr = str.split(" ")

    const pigWords = newStr.map(word => {
        if (word.length > 1) {
            const firstLetter = word[0];
            const restOfWord = word.slice(1);
            return restOfWord + firstLetter + 'ay';
        }
    })
    const newPigString = pigWords.join(' ')
    console.log(newPigString)
    return newPigString
}

pigIt('Test Wort')
pigIt('Jedes Wort endet mit ay')



/**
 * GEDANKE:
 * Jedes Wort mappen
 * Bei jedem Wort den 1. Buchstaben speichern
 * die restlichen Buchstaben entfernen
 * Reihenfolge ändern und ay anhängen
 */