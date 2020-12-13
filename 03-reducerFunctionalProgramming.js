// ALTERING VALUES INSIDE OF AN OBJECT


const object1 = {
  items: ["a", "b", "c"]
}

const object2 = {
  items: ["d", "e", "f"]
}


function combinedItemsOnASingleObject(someObject) {
  return someObject.items.reduce((accumulate, value) => {
    return accumulate + value
    })
}

function combinedItemsSingleObjectWithInitialValue(someObject) {
  return someObject.items.reduce((accumulate, value) => {
    return accumulate + value
    }, "INITIAL VALUE!!!")
}

function combinedItemsTwoObjects(someObject, someOtherObject) {
  return someOtherObject.items.reduce((accumulate, value) => { // this outer return is completed last/ returned as final result
    return accumulate + value // this inner return is completed second
  }, combinedItemsOnASingleObject(someObject)) // this happens FIRST ... see above function
}

function combinedItemsTwoObjectsReverseOrder(someObject, someOtherObject) {
  return someObject.items.reduce((accumulate, value) => { 
    return accumulate + value 
  }, combinedItemsOnASingleObject(someOtherObject)) 
}

console.log("combined items on a single object", combinedItemsOnASingleObject(object1))
console.log("combined items on a single object with an intial value is", combinedItemsSingleObjectWithInitialValue(object1))
console.log("\n")
console.log("combinedItemsTwoObjects uses other function as initial value", combinedItemsTwoObjects(object1, object2))
console.log("combinedItemsTwoObjectsReverseOrder same as above but return order is switched", combinedItemsTwoObjectsReverseOrder(object1, object2))