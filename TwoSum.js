/**
 * AUFGABE:
 * ein array und eine int werden gegeben
 * in dem array müssen 2 zahlen sein die addiert den int ergeben
 * die INDIZRS der beiden werte sollen returned werden
 */

function twoSum(numbers, target) {
    var indize1
    var indize2

    for (i = 0; i <= numbers.length; i++) {
        for (j = numbers.length; j >= 0; j--) {
            if (numbers[i] + numbers[j] === target) {
                indize1 = i
                indize2 = j   
            }
        }
    }
    return [indize1, indize2];
}

var array = [1, 2, 3, 4, 10, 12, 22]
twoSum(array, 11)

/**
 * doppelte loop eins von vorne eins von hinten
 * i und j addiert target
 * die indizes rausfinden
 */