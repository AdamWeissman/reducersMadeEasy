//COMPOSE AND COMPOSE EXPLICIT

const compose = (outerFunction, innerFunction) => (...bunchOfFunctions) => outerFunction(innerFunction(...bunchOfFunctions))

const composeExplicit = function(outerFunction, innerFunction) {
  return function(...bunchOfFunctions) {
    return outerFunction(
      innerFunction (...bunchOfFunctions)
    )}
}

//PIPE AND PIPE EXPLICIT
// note... only the last part of the function is different... inner before outer
const pipe = (outerFunction, innerFunction) => (...bunchOfFunctions) => innerFunction(outerFunction(...bunchOfFunctions))

const pipeExplicit = function(outerFunction, innerFunction) {
  return function(...bunchOfFunctions) {
    return innerFunction(
      outerFunction (...bunchOfFunctions)
    )}
}

//THE FUNCTIONS

function alpha() {
  return console.log("ALPHA")
}

function beta() {
  return console.log("BETA")
}

function c() {
  return console.log("C")
}

function delta() {
  return console.log("DELTA")
}

function epsilon() {
  return console.log("EPSILON")
}

//REDUCE FUNCTION WITH COMPOSE AND COMPOSE EXPLICIT

function runSomeFunctionsWithCompose(...fns) {
  return fns.reduce(compose)
}

function runSomeFunctionsWithComposeExplicit(...fns) {
  return fns.reduce(composeExplicit)
}

//REDUCE FUNCTION WITH PIPE AND PIPE EXPLICIT

function runSomeFunctionsWithPipe(...fns) {
  return fns.reduce(pipe)
}

function runSomeFunctionsWithPipeExplicit(...fns) {
  return fns.reduce(pipe)
}

//TESTING WITH COMPOSE VERSION

console.log("BELOW IS RESULT OF COMPOSE")
console.log(runSomeFunctionsWithCompose(
  epsilon,
  delta,
  c,
  beta,
  alpha
) ())

console.log("BELOW IS RESULT OF COMPOSE EXPLICIT")
console.log(runSomeFunctionsWithComposeExplicit(
  epsilon,
  delta,
  c,
  beta,
  alpha
) ())

//TESTING WITH PIPE VERSION

console.log("BELOW IS RESULT OF PIPE")
console.log(runSomeFunctionsWithPipe(
  epsilon,
  delta,
  c,
  beta,
  alpha
) ())

console.log("BELOW IS RESULT OF PIPE EXPLICIT")
console.log(runSomeFunctionsWithPipeExplicit(
  epsilon,
  delta,
  c,
  beta,
  alpha
) ())


// const crazyArray = runSomeFunctions(
  // addAnotherNumberByKey,
  // mapTimesThreeForTheOnThisArray,
  // mapTimesTwoForTheOnThisArray
// ) (crazyArrays, { hello: "from the argument"}, "random phrase") // only the most outer function has access to the extra arguments 

// console.log(crazyArray)