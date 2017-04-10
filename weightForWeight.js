function orderWeight(string) {
    var arrayOfOriginalWeights = turnStringIntoArray(string, " ");
    var twoDArrayWithSumOfWeightsAndWeight = createArrayWithSumOfWeightsAndWeight(arrayOfOriginalWeights);
    arrayOfOriginalWeights = sortTheArrayAndRemoveSumInformation(twoDArrayWithSumOfWeightsAndWeight);
    arrayOfOriginalWeights = (arrayOfOriginalWeights).toString().replace(/\,/g, " ");
    return arrayOfOriginalWeights;
}

function turnStringIntoArray(string, separator) {
    return string.split(separator);
}

function createArrayWithSumOfWeightsAndWeight(arrayOfOriginalWeights){
    var arrayOfSumOfWeightsWithWeights = [];
    for (var i in arrayOfOriginalWeights) {
        arrayOfSumOfWeightsWithWeights.push([(sumOfDigitsInANumber(arrayOfOriginalWeights[i])), arrayOfOriginalWeights[i]]);
    }
    return arrayOfSumOfWeightsWithWeights;
}

function sumOfDigitsInANumber(numberToSum) {
    numberToSum = numberToSum.split("");
    var sum = 0;
    for (var i in numberToSum) {
        sum += parseInt(numberToSum[i]);
}
    return sum;
}
function sortItNumericallyThenAlphabeticallyIfSumsAreEqual(a, b) {
    if(a[0] - b[0] !== 0){
        return a[0] - b[0];
    }
    return (a[1] < b[1]) ? -1 : (a[1] > b[1]) ? 1 : 0

}

function removeTheFirstValueFrom2DArray(x) {
    return x[1];
}
function sortTheArrayAndRemoveSumInformation(arrayOfModifiedWeights) {
    //console.log((arrayOfModifiedWeights.sort(sortItNumerically)));
    return (arrayOfModifiedWeights.sort(sortItNumericallyThenAlphabeticallyIfSumsAreEqual)).map(removeTheFirstValueFrom2DArray);
}

orderWeight("200 91 425 67407 96488 31064 7920 27 72 9 18 81");