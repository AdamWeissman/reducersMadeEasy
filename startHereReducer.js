// THIS IS A MOST BASIC (AND COMMON) VERSION OF REDUCE

const theArray =  [2,2,2,2,2] // if summed should add up to 10

function sumTheNumbers (fromThisArray) {
  return fromThisArray.reduce((accumulator, valueAtIndex) => {
    return accumulator + valueAtIndex
  })
}

function sumTheNumbersWithStartingValueOf10 (fromThisArray) {
  return fromThisArray.reduce((accumulator, valueAtIndex) => {
    return accumulator + valueAtIndex
  }, 10)
}

console.log("using arrow function", sumTheNumbers(theArray))
console.log("also arrow function with starting value of 10", sumTheNumbersWithStartingValueOf10(theArray))


// ALTERNATE SYNTAX USING "FUNCTION" OUTRIGHT INSTEAD OF "IMPLIED ARROW FUNCTION" AS ABOVE

function sumTheNumbers2(fromThisArray) {
  return fromThisArray.reduce(function(accumulator, valueAtIndex) {
    return accumulator + valueAtIndex
  })
}

function reduceIntoAnEmptyArray(fromThisArray) {
  return fromThisArray.reduce(function(accumulator, valueAtIndex) {
    return (accumulator.concat("using the empty array as a starting value" + " " + valueAtIndex + "\n"))
  }, [])
}


console.log("using standard function syntax", sumTheNumbers2(theArray))
console.log("using standard function with a starting array instead of a value \n the point being to send all the values into a new array", reduceIntoAnEmptyArray(theArray))

