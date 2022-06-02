//1
// Difference between “ == “ and “ === “ operators.

== compares only the values of the variables
=== compares both values and datatypes of the variables
console.log(2==2);//true

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
const foo = function(p) {//HOF
  console.log("Hello World");//Hello World
  p()//must
}
function boo() {//FCF
  console.log("iam AZHAR BUHAIS");//iam AZHAR BUHAIS
}
foo(boo); 
//6
//What are closures?

closure is not something that we create manually or explicitly. it happens automatically in certain situations which we need to recognise.
closure make a function remember all the variables that functions always has access to the variable environment of the execution context in which the function was created.
if we are assigning any function to a variable , variable will have access to all local variables.
function outer(){
  let a =10;
  function inner() {
     console.log(a);
  }
  inner();
}
outer();

//7
when you are calling using function, then dont have to define in the function, object is taken as parameter
call() -- used to call functions where arguemenets are passed as comma seperated values

apply() -- used to call functions where arguements are passed in form of arrays

bind() -- used to call functions  where arguements are passed as comma seperated, returns in form of a function.


//2.Explain Prototype
//Prototypes are the mechanism by which Javascript objects inherit features from one another.
//__proto__ object will be created inside the object which will refer to the Prototype of its class constructor or function constructor whenever an object will be created.
//Using prototype property we can also add more elements to an object which will be accessible by other objects also(the objects which will be created by same function or class constructor).

//3.What are function constructors?
//FC are use for creating objects in js
//we can call the constructor directly using "new" keyword
//Constructor name should starts with capital letter
//When we call constructor it will create an object
//dont have return statement 
//can add properties using prototype
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  
  const car1 = new Car('Eagle', 'Talon TSi', 1993);
  
//4.Give an example of inheritance using function constructor

function Employe(name,age) {
    this.name = name;
    this.age = age;
    this.salary = 100000
    
}
let employ1= new Employe("Althaf",24);//Employe {name: 'Safna', age: 20, salary: 100000}
console.log( new Employe("Safna",20));
console.log(employ1);//Employe {name: 'Althaf', age: 24, salary: 100000}

//in case,if you want to add other properties in the object created using function constructor
employ1.salary = 200000
console.log(employ1);//Employe {name: 'Althaf', age: 24, salary: 200000}

//in case you want to add some other properties,inside this fuction constructor
Employe.prototype.company="Prepbytes"
employ1.company="data entry"
console.log(employ1.company);

//5.prototype chaining
//employ1 , employ 2 ...are the object get created using function constructor,Employe--parent
console.log(employ1.__proto__);//Employe
console.log(employ1.__proto__.__proto__);//Object
console.log(employ1.__proto__.__proto__.__proto__);//null
//each object.array ... always have the prototype property from which we can access all the inbulit function

//In case of employ1 --its prototype level is Employe Function constructor,prototype level 2 is object constructor 

//6.Callback function
//Function passed to another function as argument

function outer() {
    console.log("Outer");
}
function inner() {
    console.log("Inner");
}
outer()//Outer
inner()//Inner
outer(inner)//Outer  //it is same as outer(),so only A
outer(inner())//Outer  //we get both

//7.what is the use of settimeout
//After certain time,it will return or print result
//It is WEB API
//  mainly use in irctc netbanking

setTimeout(() => {
    console.log("have a nice day");
}, 2000);

//Print vowels
function printVowels() {
    setTimeout(() => {
        console.log("A");
    }, 2000);
    setTimeout(() => {
        console.log("E");
    }, 5000);
    setTimeout(() => {
        console.log("I");
    }, 1000);
    setTimeout(() => {
        console.log("O");
    }, 1000);
    setTimeout(() => {
        console.log("U");
    }, 0);
}
printVowels()
//U I O A E

//8.What is an event loop and call stack
//The event loop has one simple job : to monitor the call stack and callback queue.
// If the call stack is empty, the event loop will take the first item from the callback queue and will push it to call stack, which will effectively runs it

//A call stack is a mechanism for an interpreter (like the JavaScript interpreter in a web browser) to keep track of its place in a script that calls multiple functions — what function is currently being run and what functions are called from within that function
//The call stack is used by JavaScript to keep track of multiple function calls. It is like a real stack in data structures where data can be pushed and popped and follows the Last In First Out (LIFO) principle. We use call stack for memorizing which function is running right now.

//9. what is execution context

// The Execution Context contains the code that's currently running, and everything that aids in its execution.

///During the Execution Context
//xt run-time, the specific code gets parsed by a parser, the variables and functions are stored in memory, executable byte-code gets generated, and the code gets executed.

//There are two kinds of Execution Context in JavaScript:

//Global Execution Context (GEC)
//Function Execution Context (FEC)


//Global Execution Context (GEC):
//Whenever the JavaScript engine receives a script file, it first creates a default Execution Context known as the Global Execution Context (GEC).

//The GEC is the base/default Execution Context where all JavaScript code that is not inside of a function gets executed.



//Function Execution Context (FEC)
//Whenever a function is called, the JavaScript engine creates a different type of Execution Context known as a Function Execution Context (FEC) within the GEC to evaluate and execute the code within that function.


//10.What is creation phase and execution phase?

//In the first stage “Memory allocation”, all the variables will get memory but will not be initialized means their value will not be given and it will be undefined,
// but functions will get their value or definition at the time of memory allocation only.

//In the second stage “Code Execution”, variables will get assigned with their true values and functions will be executed.

//After FEP is completed,it got deleted from call stack
//If all the execution completed,all get deleted from call stack

//11.What are objects in javascript?

//An object is an unordered collection of key-value pairs. Each key-value pair is called a property.
//its consists of properties and methods.
//object have keys which are converted to string types, the properties and method do not follow the insertion order.

//An object is a collection of related data and/or functionality
//(which usually consists of several variables and functions —
// which are called properties and methods when they are inside objects.)
    
var user= {
    name: "Rahul",
    profession: "Teacher",
    hobbies: ["Reading", "Dancing"],
    bio: function() {
        console.log(`Hi! I am ${name}, my profession is
       ${profession}`)
    }

}

//How to access object keys or attributes

user.name //gives “Rahul”
user.profession //gives “Teacher”

//12.What is callback hell

//each callback takes arguments that have been obtained as a result of previous callbacks. This kind of callback structure leads to lesser code readability and maintainability.
// We can avoid the callback hell with the help of Promises. Promises in javascript are a way to handle asynchronous operations in Node.
//Callback hell (also a pyramid of doom or boomerang effect) arises when you nest too many callback functions inside a callback function. 

function getEmployeeID1() {

    setTimeout(() => {
        console.log("Fetching the Employee details");
        let id = [1, 2, 3, 4, 5];
        console.log(id);

        setTimeout(() => {
            let employeeDetails = {
                name: "Arjun Kanungo",
                age: 34,
            };
            console.log(`The name of the employee is ${employeeDetails.name} an the age is ${employeeDetails.age}`);

            setTimeout(() => {
                employeeDetails.gender = "Male",
                    console.log(`The name of the employee is ${employeeDetails.name} an the age is ${employeeDetails.age} and the gender is ${employeeDetails.gender}`);

                setTimeout(() => {
                    employeeDetails.salary = 21000;
                    console.log(`The name of the employee is ${employeeDetails.name} an the age is ${employeeDetails.age} and the gender is ${employeeDetails.gender} and the salary is ${employeeDetails.salary}`);
                }, 2000);

            }, 2000);

        }, 2000);

    }, 2000);
}
getEmployeeID1()




