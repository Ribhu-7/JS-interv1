//  What is a Temporal Dead Zone?

//  let and const declarations are both block-scoped, which means they are only accessible within the { }
//  surrounding them. var, on the other hand, doesn't have this restriction.


//  This is what the TDZ is: the term to describe the state where variables are un-reachable. They are in scope,
//   but they aren't declared.

//  The let and const variables exist in the TDZ from the start of their enclosing scope until they are declared.


//  You can see above that if I accessed the age variable earlier than its declaration, it would throw  a ReferenceError. Because of the TDZ.

// But var won't do that. var is just default initialized to undefined unlike the other declaration.


// What is the for-in loop in JavaScript? Give its syntax

//  the for-in loop is a basic control statement that allows you to iterate through the properties of an object.
//  The statements of code found within the loop body will be executed once for each property of the object.

// the for-in loop can also be use in an array since an array is also consider as an object


  const student = {
        name:"vishnu",
      id: 90,
      clg: "SKCET"
 }

for ( let key in student ) {
     console.log(student[key]);
 }

// // define array
 const arr = [ 1,2,3,4,5 ];

 for (let x in arr) {
     console.log(x);
 }




//  Explain Local Scope, Block Scope, Functional Scope and Scope Chain in javascript

//local scope:
//  a local scope is the opposite of the global scope .here the variable can only be access within a given scope 
//  but can still be accessible for the other scope which are being nested within that parent  scope 

//  Since local variables are only recognized inside their functions, variables with the same name can be used in different scope

//  Local variables are created when a scope starts, and deleted when the scope is completed.
//  local scope can further be divided into block and functional scope

//  block Scope:
//  a block scope is a type of scope if a variable is define it can only be acesss  that variable within that scope only

//  Block scoped variables: A block scoped variable means that the variable defined within a block will not be 
// accessible from outside the block. A block can reside inside a function, and a block scoped variable will not be
//  available outside the block even if the block is inside a function.


//  functional scope:
//  A function scoped variable means that the variable defined within a function will not accessible from outside the function.

// function scope(){
//     let r = "local"// local or function  scope variable
//     if("a"==="a"){
//         let d = "block"// block scope variable
//         console.log(d)// op
//         console.log(r)//op
//     }
//     console.log(d)//error
//     if("d"==="d"){
//         console.log(d);//error
//     }
// }



//  What is difference between null and undefined and where to use what?

//  null is a data type which can be use to implement or initialized a variable
//   null can also be written as "",''
// let null = null;
// console.log(null);// op null

//  undefine is  when a variable is define but not initialized or we have assign value to a variable then we get undefine

// var value;
// console.log(value); //undefine


//  what is Symbol?

//  Symbol is a primitive data type of JavaScript, along with string, number, boolean, null and undefined.

//  It was introduced in ECMAScript 2015, so just a few years ago.

//  It’s a very peculiar data type. Once you create a symbol, its value is kept private and for internal use.
//  it is alwaye unique

// const mySymbol = Symbol()// to create symbol
// Symbol() === Symbol() //false



//  Write code to explain map and filter in arrays

//  The map() method is used for creating a new array from an existing one, applying a function to each one of
//  the elements of the first array.


// let arra = [1,2,3,4,5]
// let ser = arra.map(x => x*2);
// console.log(ser);//multiply all element by 2


//  The filter() method takes each element in an array and it applies a conditional statement against it. 
//  If this conditional returns true, the element gets pushed to the output array. If the condition returns false,
//   the element does not get pushed to the output array.
// let sew = arra.filter(x => x>3);
// console.log(sew);



// Write a code to create two objects with 2 properties each, one will be string and other will be an array. Create a function to check if all the elements of the arrays in both the objects are same
let person = {
    fname: "supriya",
    id:[1,2,3,4]
}
let person2 = {
    sname: "prabu",
    id2: [1,2,3,4]
}

function check() {
    arr1 = person.id
    arr2 = person2.id2
    if(arr1.length===arr2.length){
    let a = 0;
    for(i=0; i<person.id.length; i++){
        for(j=0; j<person.id.length; j++){
            if(arr1[i]===arr2[j]){
                a++;
            }
        }
  
  
    }
if(arr1.length===a){
    console.log("same")
}else{
    console.log("different")
}
}
else{
    console.log("different")
}
}

check();



// Please explain Self Invoking Function and its code


//  all function need to be call in other to perform nut self invoking as the name suggest that it automatically call
//  or invoke the function after its being define

// The execution of such an anonymous function is done by enclosing it in a parenthesis set followed by another
//  set of parenthesis.

// it is independable

// Self-invoking functions are useful for initialization tasks and for one-time code executions, without the need 
// of creating global variables.


// The self-invoking function in JavaScript are known as Immediately Invoked Function Expressions (IIFE).

(function () {
    let x = "selfinvoking function";  
    console.log(x)
  })();