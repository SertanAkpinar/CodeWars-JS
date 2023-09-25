function createPhoneNumber(numbers) {

    var vorwahlArray = []
    var mittelZiffern = []
    var endZiffern = []

    for (var i = 0; i < 3; i++) {
        var randomValue = numbers[i];
        vorwahlArray.push(randomValue);
    }
    for (var i = 3; i < 6; i++) {
        var randomValue = numbers[i];
        mittelZiffern.push(randomValue)
    }
    for (var i = 6; i < numbers.length; i++) {
        var randomValue = numbers[i];
        endZiffern.push(randomValue);
    }
    var vorwahl = vorwahlArray.join('')
    var mitte = mittelZiffern.join('')
    var ende = endZiffern.join('')
    var telefonnummer = '(' + vorwahl + ')' + ' ' + mitte + '-' + ende;
    return telefonnummer
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

/**
 * ___ BESTE LÖSUNG ___
function createPhoneNumber(numbers){
  var format = "(xxx) xxx-xxxx";
  
  for(var i = 0; i < numbers.length; i++)
  {
    format = format.replace('x', numbers[i]);
  }
  
  return format;
}
 */