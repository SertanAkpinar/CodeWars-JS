/**
 * AUFGABE:
 * prüfe den String nach _ und - 
 * lösche dieses Zeichen und füge direkt das nächste Wort hinzu 
 * das Wort soll dan groß geschrieben werden
 * das allererste Wort soll nur groß geschrieben werden, wenn es schon groß war
 */

function toCamelCase(str){
var words = str.split(/[_-]/);
    
    var result = words[0]; // erster Buchstabe
    
    for (var i = 1; i < words.length; i++) {
        var word = words[i];
        result += (word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
    }
console.log(result)
return result
}
toCamelCase("Jujutsu-Kaizen-ist_cool")

/**
 * GEDANKEN:
 * das wort direkt splitten
 * jedes Wort uppercasen
 * Wort zusammenfügen
 */