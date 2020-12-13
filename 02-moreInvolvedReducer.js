// REDUCE FOR LARGEST VALUE IN AN ARRAY

const theArray = [1,100,55,1000,89]

function largestValueinAnArray(fromThisArray) {
  return fromThisArray.reduce(( maxValue, currentValueToCompare) => {
    return Math.max(maxValue, currentValueToCompare)
  } )
}

console.log("largest value in an array using reduce", largestValueinAnArray(theArray))