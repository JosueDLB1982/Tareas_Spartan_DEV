let number = 348597
let number2 = 5647
let number3 = 746512

const arrayNumberInvert = (element) => {
    const createArrayReverse = Array.from(element.toString()).reverse()
    // let returnArrayNumbers = []
    // for (let number of createArrayReverse) {
    //     returnArrayNumbers.push((parseInt(number)))
    // }
    const result = createArrayReverse.map(number => parseInt(number))
    //console.log(returnArrayNumbers)
    console.log(`La cifra convertida en array invertido es [${result}]`)
}
arrayNumberInvert(number3)
