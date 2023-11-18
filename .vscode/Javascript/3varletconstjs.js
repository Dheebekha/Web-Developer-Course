//var  = > redeclare, eeassign
//let = > no redeclare, eeassign
//const = > no redeclare, no eeassign
//scope => lifetime of a variable


//redeclare
var a = 10
var a = 20
console.log(a)

//reassign
var a = 10
a = 20
console.log(a)


//look at python tutor  javascript

//let => redeclare
let m = 20
//let b = 30  - will throw error
console.log(m)


//reassign

let b = 10
b = 20
console.log(b)


//const - redeclare - will throw error

const c = 10
//const c = 20
console.log(c)


//reassign - no syntax error , but runtime error , const cannot be reassigned aslo
const d = 10
//d = 20
console.log(c)


//hoisting
//console.log(x) // will say undefined at runtime (not error) - also called as hoisting - calling a variable before declaring it, follo
var x = 10
console.log(x)


console.log(y) // will throw error, no lines below will get executed uncaught reference error 
let y = 10 // same for conat also
console.log(y)


//Scope => lifetime of variable

{
    let y1 = 10
    var y2 = 20
    console.log(y1) // will print 10
}
console.log(y1) // cannot be accessed outside the block, uncaught reference error y1 is not defined
console.log(y2) // will print 20 without error - var will leak outside the block.

