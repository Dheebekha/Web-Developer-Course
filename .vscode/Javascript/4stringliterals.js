var mname = "Avengers"
var type = "Action"
var category = "Hollywood"
var rating = 5

//Avengers is an Action movie with rating 5 with category Hollywood

console.log("Actual text =>", "Avengers is an action movie with rating  5 with category Hollywood")

//ecma = > standard for javascript

// es5 and es6 are commonly used standards for javascript

//es5

 var output = mname + " is an " + type + " movie with rating " + rating + " with category " + category

 console.log("ES5 Output =>", output)

 //es6 => template literals
 //`` => back tick + interpolation ${} => substitute the value

 var output = `${mname} is an ${type} movie with rating ${rating} with category ${category}`
 console.log("ES6=>", output)
