//1
// Difference between “ == “ and “ === “ operators.

== compares only the values of the variables
=== compares both values and datatypes of the variables

//2
//spread operator

spread operator is used to fetch only the elements or values inside the arrays.
e.g : let a = [1,2,3]
(...a) -> 1 2 3

//3
//What are the differences between var, let and const?

let -> let is a keyword which is used for variables.
it can be declared in a line with a value in another line , it can also be declared & initialised in same line.
they cannot be redeclared , but can be reinitialised, cannot have 2 variables with same name in let.

const -> let is a keyword which is used for variables.
it can be declared in a line with a value in another line , it can also be declared & initialised in same line.
they cannot be redeclared nor can be reinitialised.

var -> can be declared & initialised in same line, 2 or more variables with same name possible , can be redeclared & reinitialised.

//4 
//What is execution context

it contains two phases : creation phase and execution phase:
creation phase:
allocate memory to variables & function definitions are allocated to name of functions , exact values are not assigned to variables instead default value undefined is assigned to all variables.

execution phase:
exact value for the variable will be overwritten and undefined will be removed. function body is now executed once function is called.

after execution phase both global & function execution context gets removed from call stack.

//5
// What is meant by first class functions

functions can be passed as values into another functions or can be returned from another functions as values. This unique features of functions make them call as first class.

//6
//What are closures?

closure is not something that we create manually or explicitly. it happens automatically in certain situations which we need to recognise.
closure make a function remember all the variables that functions always has access to the variable environment of the execution context in which the function was created.
if we are assigning any function to a variable , variable will have access to all local variables.


