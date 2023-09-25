function convertToBinary1(number) {
    // let result
    // let binary = (number % 2).toString();
    // for (; number > 1;) {
    //     number = parseInt(number / 2);
    //     binary = (number % 2) + (binary);
    //     for (i = 0; i <= binary.length; i++) {
    //         if (binary[i] == '1') {
    //             result ++
    //         }
    //     }
    // }
    // console.log(binary);
    // console.log(result)

    let binary = (number >>> 0).toString(2); // Konvertiere die Dezimalzahl in eine Binärzahl als Zeichenkette
    let result = 0; // Initialisiere das Ergebnis auf 0

    for (let i = 0; i < binary.length; i++) {
        if (binary[i] === '1') {
            result++;
        }
    }
    console.log(binary)
    console.log(result)
    return result;
}
convertToBinary1(4513779334)
convertToBinary1(5762332812)
convertToBinary1(5667794926)
convertToBinary1(4390994479)
convertToBinary1(8589300795)
// console.log(convertToBinary1(8));
