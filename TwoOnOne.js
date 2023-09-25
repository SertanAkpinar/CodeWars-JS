/**
 * AUFGABE:
 * füge beide Strings zusammen
 * sortiere sie und es soll kein Buchstabe doppelt vorkommen
 */

function longest(s1, s2) {

    var string = s1 + s2
    var array = string.split('').sort()
    var sortedString = '';

    for (var i = 0; i < array.length; i++) {
        var letter = array[i];
        
        if (!sortedString.includes(letter)) {
            sortedString += letter;
        }
    }

    console.log(sortedString)
    return sortedString
}

longest('cba', 'gefdec')

/**
 * _____ BESTE LÖSUNG ______
 const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')
 */