//Array with functions
let arr = [1,2,3,4,5];

function getSum(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }   
    return sum;
}  
console.log("Sum of array: ",getSum(arr));  // output: Sum of array:  15

//Call stack in js   ---> it is a data structure that keeps track of the function calls in a program.
                        //  It follows the Last In First Out (LIFO) principle

function first(){
    console.log("Inside first function");
    second();
    console.log("Exiting first function");
}   
function second(){
    console.log("Inside second function");
    third();
    console.log("Exiting second function");
}
function third(){
    console.log("Inside third function");
    console.log("Exiting third function");
}   
first();
// output:
// Inside first function
// Inside second function
// Inside third function
// Exiting third function
// Exiting second function
// Exiting first function   


//Hoisting in js  ---> it is a behavior in JavaScript where variable and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use variables and functions before they are declared in the code.

//===> only var declarations are hoisted, not let and const. Function declarations are also hoisted, but function expressions are not.
console.log("Value of x: ",x);  // output: Value of x:  undefined
var x = 10; 

console.log("Value of y: ",y);  // output: Value of y:  ReferenceError: Cannot access 'y' before initialization
let y = 20; 

console.log("Value of z: ",z);  // output: Value of z:  ReferenceError: Cannot access 'z' before initialization
const z = 30;   



// Variable Scope in js  --->JavaScript has three types of variable scope: global scope, function scope, and block scope.

//Global Scope   --> same for var, let and const 
var globalVar = "I am a global variable";  

function testScope(){
    console.log(globalVar);  // output: I am a global variable
}
testScope();  //Calling function to access global variable.

{
    console.log(globalVar);  // output: I am a global variable
}

if(true){
    console.log(globalVar);  // output: I am a global variable
}   

for(let i=0;i<5;i++){
    console.log(globalVar);  // output: I am a global variable (printed 5 times)
}   


//Function Scope -->same for var, let and const
function functionScope(){
    var functionVar = "I am a function variable";
    console.log(functionVar);  // output: I am a function variable
}
functionScope();
//console.log(functionVar);  // output: ReferenceError: functionVar is not defined



//Block Scope
if(true){
    let blockVar = "I am a block variable";
    const blockConst = "I am a block constant";
    console.log(blockVar);  // output: I am a block variable
    console.log(blockConst);  // output: I am a block constant
}
// console.log(blockVar);  // output: ReferenceError: blockVar is not defined
// console.log(blockConst);  // output: ReferenceError: blockConst is not defined

console.log(age); // output: undefined, because var is hoisted and initialized with undefined
{ 
    var age = 25;  // var is not block scoped, so it is accessible outside the block
}
console.log(age);  // output: 25


//Temporal Dead Zone (TDZ) in js  --> it is a behavior in JavaScript where variables declared with let and const are not accessible before they are declared. This means that if you try to access a variable before its declaration, you will get a ReferenceError.

// console.log("Hello, World!");  // output: ReferenceError: Cannot access 'myVar' before initialization
//console.log("Hello");  // output: ReferenceError: Cannot access 'myVar' before initialization
// console.log(myVar);  // output: ReferenceError: Cannot access 'myVar' before initialization
let myVar = "Hello, World!";
console.log(myVar);  // output: Hello, World! 

//line 106 to 108 is commented to show the TDZ behavior. 


