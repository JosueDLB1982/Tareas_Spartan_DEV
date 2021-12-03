const arrayNumber = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
const newValueArrayMap = (array) =>
    array.map((item) => {
        return item.toString();
    });

let stringArray = newValueArrayMap(arrayNumber);

const oddNumberFilterArrayValue = (array) => {
    const oddResultFilter = array.filter((item) => item % 2 !== 0);
    return oddResultFilter;
};

const evenNumberFilterArrayValue = (array) => {
    const evenResultFilter = array.filter((item) => item % 2 === 0);
    return evenResultFilter;
};

console.log(oddNumberFilterArrayValue(arrayNumber));

let oddProofValueArray = oddNumberFilterArrayValue(stringArray);
let evenProofValueArray = evenNumberFilterArrayValue(stringArray);

const oddNumberMapArray = (strArray) => {
    const result = strArray.map((item) => item + " Es impar");
    return result;
};

const evenNumberMapArray = (strArray) => {
    const result = strArray.map((item) => item + " Es par");
    return result;
};

const oddMapArrayNumber = oddNumberMapArray(oddProofValueArray);
const evenMapArrayNumber = evenNumberMapArray(evenProofValueArray);


console.log(oddMapArrayNumber, evenMapArrayNumber);






