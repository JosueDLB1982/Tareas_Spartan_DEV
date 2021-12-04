let number = 348597
let number2 = 5647
let number3 = 746512
let number4 = 7654345652

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
arrayNumberInvert(number2)