//Object cloning
let obj1 = { name: "Shiv", age: 30 };
let obj2 = obj1;
console.log(obj1);  // output: { name: 'Shiv', age: 30 }
console.log(obj2);  // output: { name: 'Shiv', age: 30 }    
obj2.name = "Updated Shiv";
console.log(obj1);   // output: { name: 'Updated Shiv', age: 30 } because obj1 and obj2 reference the same object in memory
console.log(obj2);  // output: { name: 'Updated Shiv', age: 30 }

//using spread operator for cloning
let obj3 = { ...obj1 };
console.log(obj3);  // output: { name: 'Updated Shiv', age: 30 }
obj3.name = "Completely Updated Shiv";
console.log(obj1);  // output: { name: 'Updated Shiv', age: 30 } - unchanged
console.log(obj3);  // output: { name: 'Completely Updated Shiv', age: 30 }

//using Object.assign() for cloning
let obj4 = Object.assign({}, obj1);
console.log(obj4);  // output: { name: 'Updated Shiv', age: 30 }
obj4.name = "Another Updated Shiv";
console.log(obj1);  // output: { name: 'Updated Shiv', age: 30 } - unchanged
console.log(obj4);  // output: { name: 'Another Updated Shiv', age: 30 }

//using for...in loop for cloning
let obj5 = {};
for (let key in obj1) {
    obj5[key] = obj1[key];
}   
console.log(obj5);  // output: { name: 'Updated Shiv', age: 30 }
obj5.name = "Yet Another Updated Shiv";
console.log(obj1);  // output: { name: 'Updated Shiv', age: 30 } - unchanged
console.log(obj5);  // output: { name: 'Yet Another Updated Shiv', age: 30 }    


//Garbage Collection in JavaScript
//Garbage collection is the process of automatically freeing up memory that is no longer in use by the program. In JavaScript, garbage collection is handled by the JavaScript engine, which uses a technique called "mark-and-sweep" to identify and remove objects that are no longer reachable in the program.



//error  ---> it is an unexpected condition that occurs during the execution of a program, which can disrupt the normal flow of the program and may cause it to crash or produce incorrect results. Errors can occur due to various reasons, such as syntax errors, runtime errors, logical errors, or exceptions. Proper error handling is essential to ensure that a program can gracefully handle errors and continue to function without crashing.
//type of errors in JavaScript
//1. Syntax Errors: These occur when the code violates the syntax rules of the programming language. For example, missing a closing parenthesis or using an undeclared variable can result in a syntax error.
//2. Runtime Errors: These occur during the execution of the program and can be caused by various factors such as accessing an undefined variable, calling a function that does not exist, or trying to perform an operation on incompatible data types.
//3. Logical Errors: These occur when the code runs without throwing any errors but produces incorrect results due to a flaw in the logic of the program. For example, using the wrong operator or incorrect conditions in an if statement can lead to logical errors.
//4. Exceptions: These are specific types of runtime errors that can be caught and handled using try...catch statements. Examples of exceptions include ReferenceError, TypeError, RangeError, etc. 



//Error handling in JavaScript
//In JavaScript, error handling is typically done using try...catch statements.
//  The try block contains code that may throw an error, while the catch block contains code that handles the error if it occurs.


try {
    // Code that may throw an error
    let result = someFunction(); // Assuming someFunction is not defined, this will throw a ReferenceError
    console.log(result);
} catch (error) {
    // Code to handle the error
    console.error("An error occurred: ", error.message);
}   
//output: An error occurred:  someFunction is not defined

//You can also use the finally block to execute code that should run regardless of whether an error occurred or not.
finally {
    // Code that runs regardless of whether an error occurred
    console.log("Execution completed.");
}   
//output: Execution completed.


//You can also throw your own custom errors using the throw statement.
function validateAge(age) {
    if (age < 18) {
        throw new Error("Age must be at least 18.");
    }
    return true;
}
try {
    validateAge(15); // This will throw an error because age is less than 18
} catch (error) {
    console.error("Validation error: ", error);
}
//output: Validation error:  Error: Age must be at least 18.

