// THIS IS A MOST BASIC (AND COMMON) VERSION OF REDUCE

const theArray =  [2,2,2,2,2] // if summed should add up to 10

function sumTheNumbers(fromThisArray) {
  return fromThisArray.reduce((accumulator, valueAtIndex) => {
    return accumulator + valueAtIndex
  })
}

console.log(sumTheNumbers(theArray))


// ALTERNATE SYNTAX USING "FUNCTION" OUTRIGHT INSTEAD OF "IMPLIED ARROW FUNCTION" AS ABOVE

function sumTheNumbers2(fromThisArray) {
  return fromThisArray.reduce(function(accumulator, valueAtIndex) {
    return accumulator + valueAtIndex
  })
}

console.log(sumTheNumbers2(theArray))