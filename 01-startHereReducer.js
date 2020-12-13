// THIS IS A MOST BASIC (AND COMMON) VERSION OF REDUCE

const theArray =  [2,2,2,2,2] // if summed should add up to 10

function sumTheNumbers (fromThisArray) {
  return fromThisArray.reduce((accumulator, valueAtIndex) => {
    return accumulator + valueAtIndex // yields the total
  })
}

function sumTheNumbersWithStartingValueOf10 (fromThisArray) {
  return fromThisArray.reduce((accumulator, valueAtIndex) => {
    return accumulator + valueAtIndex //yields the total, but... see the next line...
  }, 10) // it starts at 10
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
    return (accumulator.concat("using the empty array as a starting value" + " " + valueAtIndex))
    // the above line treats the empty array below as the "accumulator/starting value" where it concatentates the text and value above
  }, []) 
}


console.log("using standard function syntax", sumTheNumbers2(theArray))
console.log("using standard function with a starting array instead of a value \n the point being to send all the values into a new array", reduceIntoAnEmptyArray(theArray))
