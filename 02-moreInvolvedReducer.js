// REDUCE FOR LARGEST VALUE IN AN ARRAY

const theArray = [1,100,55,1000, -20,89]

function largestValueinAnArray(fromThisArray) {
  return fromThisArray.reduce(( maxValue, currentValueToCompare) => {
    return Math.max(maxValue, currentValueToCompare)
  } )
}

console.log("largest value in an array using reduce", largestValueinAnArray(theArray))

// REDUCE FOR SMALLEST VALUE IN AN ARRAY

function smallestValueinAnArray(fromThisArray) {
  return fromThisArray.reduce(( minValue, currentValueToCompare) => {
    return Math.min(minValue, currentValueToCompare)
  } )
}

console.log("smallest value in an array using reduce", smallestValueinAnArray(theArray))

// REDUCE FOR LARGEST KEY WITH THE MAX VALUE

const theObject = {
  A: 1,
  B: 3,
  C: 5,
  D: 89,
  E: 55,
  F: 34,
  G: 21
}

function keyWithLargestValueinAnObject(fromThisObject) {
  return Object.keys(fromThisObject).reduce(( keyWithMaxValue, currentKeyWithValueToCompare) => {
    if (fromThisObject[keyWithMaxValue] > fromThisObject[currentKeyWithValueToCompare]) {
      return keyWithMaxValue
    } else {
      return currentKeyWithValueToCompare
    }
  } )
}

console.log("key with largest value in an Object", keyWithLargestValueinAnObject(theObject))

// REDUCE FOR THE LARGEST VALUE IN AN OBJECT

function theLargestValueinAnObject(fromThisObject) {
  return Object.values(fromThisObject).reduce(( maxValue, currentValueToCompare) => {
    return Math.max(maxValue, currentValueToCompare)
  } )
}

console.log("return just the largest value in the object", theLargestValueinAnObject(theObject))