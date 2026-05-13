// class  ---> class is a template for creating objects. It encapsulates data and functions that operate on that data.

//In JavaScript, classes were introduced in ES6 (ECMAScript 2015) as a syntactical sugar over the existing prototype-based inheritance. They provide a more familiar and structured way to create objects and deal with inheritance.
//this keyword in js  ---> it refers to the current object that is executing the code.

//Class Declaration
class Person {
    //public data members
    age;
    name;

    //privete data members
    #city;  

    //constructor method is a special method for creating and initializing an object created with a class. 
    // It is called automatically when a new instance of the class is created. 
    // The constructor method can take parameters to initialize the properties of the object.
    constructor(name, age){
        this.name = name;
        this.age = age;
    } 

    //behavior 
    greet(){
        console.log("Hello, my name is " + this.name);
    }
     
    //getter and setter for private data member #city
    get fetch(){
        return this.#city;
    }
    set modify(value){
        this.#city = value;
    }
}

let obj = new Person("Shiv", 30);
obj.greet();  // output: Hello, my name is Shiv
console.log("Name: ",obj.name);  // output: Name:  Shiv
console.log("Age: ",obj.age);    // output: Age:  30
console.log("City: ",obj.fetch);  // output: City:  undefined
obj.modify = "New York";
console.log("City: ",obj.fetch);  // output: City:  New York

obj.modify = "Updated City";  // This will call the setter
console.log("City: ",obj.fetch);  // output: City:  Updated City
//constructor is a special method for creating and initializing an object created with a class. It is called automatically when a new instance of the class is created. The constructor method can take parameters to initialize the properties of the object.


//default parameters in js  ---> default parameters allow you to specify default values for function parameters. If a parameter is not provided when the function is called, the default value will be used.

function greet(name = "Guest"){
    console.log("Hello, " + name);
}
greet();  // output: Hello, Guest
greet("Shiv");  // output: Hello, Shiv

function add(a, b = 0){
    return a + b;
}   
console.log(add(5));  // output: 5, because b is defaulted to 0
console.log(add(5, 3));  // output: 8, because b is provided as 3
console.log(add());  // output: NaN, because a is required and not provided, while b defaults to 0    // a=undefined, b=0, so undefined + 0 results in NaN
console.log(add(undefined, 3));  // output: NaN, because a is undefined and b is provided as 3, so undefined + 3 results in NaN
console.log(add(5, undefined));  // output: 5, because a is provided as 5 and b defaults to 0, so 5 + 0 results in 5
console.log(add(undefined, null));  // output: NaN, because a is undefined and b is null, so undefined + null results in NaN

function solve(a,b=add(5,10)){  // default parameter can also be an expression, in this case it calls the add function with arguments 5 and 10, which returns 15, so b defaults to 15
    return a + b;
}
console.log(solve(5));  // output: 20, because a is 5 and b defaults to 15
console.log(solve(5, 3));  // output: 8, because a is 5 and b is provided as 3


//Built-in Objects in js  ---> JavaScript provides several built-in objects that are available in the global scope. These objects provide various functionalities and can be used to perform common tasks.

//Math Object       
console.log("Math.PI: ",Math.PI);  // output: Math.PI:  3.141592653589793
console.log("Math.sqrt(16): ",Math.sqrt(16)); // output: Math.sqrt(16):  4
console.log("Math.pow(2,3): ",Math.pow(2,3));  // output: Math.pow(2,3):  8
console.log("Math.random(): ",Math.random());  // output: Math.random():  0.123456789 (random number between 0 and 1)
console.log("Math.floor(3.7): ",Math.floor(3.7));  // output: Math.floor(3.7):  3
console.log("Math.ceil(3.2): ",Math.ceil(3.2));  // output: Math.ceil(3.2):  4
console.log("Math.round(3.5): ",Math.round(3.5));  // output: Math.round(3.5):  4
console.log("Math.max(1,5,3): ",Math.max(1,5,3));  // output: Math.max(1,5,3):  5
console.log("Math.min(1,5,3): ",Math.min(1,5,3));  // output: Math.min(1,5,3):  1   
console.log("Math.abs(-5): ",Math.abs(-5));  // output: Math.abs(-5):  5
console.log("Math.sign(-5): ",Math.sign(-5));  // output: Math.sign(-5):  -1
console.log("Math.sign(0): ",Math.sign(0));  // output: Math.sign(0):  0
console.log("Math.sign(5): ",Math.sign(5));  // output: Math.sign(5):  1        

//Date Object
let date = new Date();
console.log("Current Date and Time: ",date);  // output: Current Date and Time:  Wed Jun 26 2024 12:34:56 GMT+0000 (Coordinated Universal Time) 
console.log("Current Year: ",date.getFullYear());  // output: Current Year:  2024
console.log("Current Month: ",date.getMonth());  // output: Current Month:  5 (Note: Months are zero-indexed, so January is 0 and December is 11)
console.log("Current Date: ",date.getDate());  // output: Current Date:  26
console.log("Current Day: ",date.getDay());  // output: Current Day:  3 (Note: Days are zero-indexed, so Sunday is 0 and Saturday is 6)
console.log("Current Hours: ",date.getHours());  // output: Current Hours:  12
console.log("Current Minutes: ",date.getMinutes());  // output: Current Minutes:  34
console.log("Current Seconds: ",date.getSeconds());  // output: Current Seconds:  56
console.log("Current Milliseconds: ",date.getMilliseconds());  // output: Current Milliseconds:  789
console.log("Current Time in Milliseconds since January 1, 1970: ",date.getTime());  // output: Current Time in Milliseconds since January 1, 1970:  1711930496789  