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
  return console.log("  ALPHA")
}

function beta() {
  return console.log("  BETA")
}

function cappa() {
  return console.log("  CAPPA")
}

function delta() {
  return console.log("  DELTA")
}

function epsilon() {
  return console.log("  EPSILON")
}

// THE FUNCTIONS WITH ARGUMENTS

function alphaWithArgs(obj, whichKeyToUpdate) {
  console.log("  ALPHA")
  const updateObj = `obj.${whichKeyToUpdate}`.concat("ALPHA")
  return Object.assign(obj, obj, { [whichKeyToUpdate]: updateObj } )
}

function betaWithArgs(obj, whichKeyToUpdate) {
  console.log("  BETA")
  const updateObj = `obj.${whichKeyToUpdate}`.concat("BETA")
  return Object.assign(obj, obj, { [whichKeyToUpdate]: updateObj } )
}

function cappaWithArgs(obj, whichKeyToUpdate) {
  console.log("  CAPPA")
  const updateObj = `obj.${whichKeyToUpdate}`.concat("CAPPA")
  return Object.assign(obj, obj, { [whichKeyToUpdate]: updateObj } )
}

function deltaWithArgs(obj, whichKeyToUpdate) {
  console.log("  DELTA")
  const updateObj = `obj.${whichKeyToUpdate}`.concat("DELTA")
  return Object.assign(obj, obj, { [whichKeyToUpdate]: updateObj } )
}

function epsilonWithArgs(obj, whichKeyToUpdate) {
  console.log("  EPSILON")
  const updateObj = `obj.${whichKeyToUpdate}`.concat("EPSILON")
  return Object.assign(obj, obj, { [whichKeyToUpdate]: updateObj } )
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

//TESTING WITH COMPOSE VERSIONS

console.log("BELOW IS RESULT OF COMPOSE")
console.log(runSomeFunctionsWithCompose(
  epsilon,
  delta,
  cappa,
  beta,
  alpha
) ())

console.log("BELOW IS RESULT OF COMPOSE EXPLICIT")
console.log(runSomeFunctionsWithComposeExplicit(
  epsilon,
  delta,
  cappa,
  beta,
  alpha
) ())

//TESTING WITH PIPE VERSIONS

console.log("BELOW IS RESULT OF PIPE")
console.log(runSomeFunctionsWithPipe(
  epsilon,
  delta,
  cappa,
  beta,
  alpha
) ())

console.log("BELOW IS RESULT OF PIPE EXPLICIT")
console.log(runSomeFunctionsWithPipeExplicit(
  epsilon,
  delta,
  cappa,
  beta,
  alpha
) ())

// THIS OBJECT IS USED TO CAPTURE ALL THE VALUES

const objectForComparingComposeAndPipe = {
  compose: [],
  composeWithArgs: [],
  pipe: [],
  pipeWithArgs: []
}


//TESTING FUNCTIONS THAT HAVE ARGUMENTS WITH COMPOSE VERSIONS

console.log("BELOW IS RESULT OF COMPOSE WITH ARGS" )
console.log(runSomeFunctionsWithCompose(
  epsilonWithArgs,
  deltaWithArgs,
  cappaWithArgs,
  betaWithArgs,
  alphaWithArgs
  ) (objectForComparingComposeAndPipe, "compose" ))
  
// console.log("BELOW IS RESULT OF COMPOSE EXPLICIT WITH ARGS")
// console.log(runSomeFunctionsWithComposeExplicit(
//   epsilonWithArgs,
//   deltaWithArgs,
//   cappaWithArgs,
//   betaWithArgs,
//   alphaWithArgs
// ) ())

//TESTING FUNCTIONS THAT HAVE ARGUMENTS WITH PIPE VERSIONS

// console.log("BELOW IS RESULT OF PIPE WITH ARGS")
// console.log(runSomeFunctionsWithPipe(
//   epsilonWithArgs,
//   deltaWithArgs,
//   cappaWithArgs,
//   betaWithArgs,
//   alphaWithArgs
// ) ())

// console.log("BELOW IS RESULT OF PIPE EXPLICIT WITH ARGS")
// console.log(runSomeFunctionsWithPipeExplicit(
//   epsilonWithArgs,
//   deltaWithArgs,
//   cappaWithArgs,
//   betaWithArgs,
//   alphaWithArgs
// ) ())


// const crazyArray = runSomeFunctions(
  // addAnotherNumberByKey,
  // mapTimesThreeForTheOnThisArray,
  // mapTimesTwoForTheOnThisArray
// ) (crazyArrays, { hello: "from the argument"}, "random phrase") // only the most outer function has access to the extra arguments 

// console.log(crazyArray)