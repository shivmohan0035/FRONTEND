//Functions   , objects and array   ---->Non Primitive data types(Reference data types)

//Function Declaration
function add(a,b){
    return a+b;
}
//function called by its name and passing arguments
let sum = add(5,3);
console.log("Printing sum: ",sum);


//Function Expression
let subtract = function(a,b){
    return a-b;
}
console.log("Printing difference: ",subtract(5,3));


//Arrow Function
let multiply = (a,b) => {   
    return a*b;
}
console.log("Printing product: ",multiply(5,3));
//Shorter syntax for arrow function when there is only one expression
let divide = (a,b) => a/b;
console.log(divide(5,3));



//objects
let person = {
    name: "Shiv",
    age: 30,
    city: "New York",
    greet: function(){
        console.log("Hello, my name is " + this.name);
    }
};
console.log("Object: ",person);
//Accessing object properties
console.log("Name: ",person.name);
console.log("Age: ",person.age);
console.log("City: ",person.city);
console.log("Accessing properties using bracket notation: ",person["name"]);
console.log(typeof(person));  //object
person.greet();  //Calling object method    

// output:

// Object:  { name: 'Shiv', age: 30, city: 'New York', greet: [Function: greet] }
// Name:  Shiv
// Age:  30
// City:  New York
// Accessing properties using bracket notation:  Shiv
// object
// Hello, my name is Shiv



//Array
let num = [1,2,3,4,5];
console.log("Array: ",num);  // output: Array:  [ 1, 2, 3, 4, 5 ]
//Accessing array elements
console.log("First element: ",num[0]);  // output: First element:  1
console.log("Third element: ",num[2]);  // output: Third element:  3

let arr= new Array("Shiv",20,true);   //Creating array using array constructor
console.log("Array created using constructor: ",arr);  // output: Array created using constructor:  [ 'Shiv', 20, true ]

//Array methods

num.push(6);  //Adding element to end of array
console.log("After adding element: ",num);  // output: After adding element:  [ 1, 2, 3, 4, 5, 6 ]


num.pop();   //Removing last element from array
console.log("After removing last element: ",num);  // output: After removing last element:  [ 1, 2, 3, 4, 5 ]

num.shift();  //Removing first element from array
console.log("After removing first element: ",num);  // output: After removing first element:  [ 2, 3, 4, 5 ]

num.unshift("Shiv");  //Adding element to beginning of array
console.log("After adding element to beginning: ",num );  // output: After adding element to beginning:  [ 'Shiv', 2, 3, 4, 5 ]

num.splice(2, 1);  //Removing element at index 2
console.log("After removing element at index 2: ",num);  // output: After removing element at index 2:  [ 'Shiv', 2, 4, 5 ]
num.splice(2, 0, "New Element");  //Adding element at index 2
console.log("After adding element at index 2: ",num);  // output: After adding element at index 2:  [ 'Shiv', 2, 'New Element', 4, 5 ]

console.log("Sliced array from index 1 to 3: ",num.slice(1, 3));  // output: Sliced array from index 1 to 3:  [ 2, 'New Element' ]

console.log("After slicing array from index 1 to 3: ",num);  // output: After slicing array from index 1 to 3:  [ 'Shiv', 2, 'New Element', 4, 5 ]

let index = num.indexOf(4);  //Finding index of element 4
console.log("Index of element 4: ",index);  // output: Index of element 4:  3

let includesElement = num.includes(5);  //Checking if element 5 is present in array
console.log("Is element 5 present in array? ",includesElement);  // output: Is element 5 present in array?  true    

let length = num.length;  //Finding length of array
console.log("Length of array: ",length);  // output: Length of array:  5

num.sort();  //Sorting array
console.log("Sorted array: ",num);  // output: Sorted array:  [ 2, 4, 5, 'New Element', 'Shiv' ]

let reversedArray = num.reverse();  //Reversing array
console.log("Reversed array: ",reversedArray);  // output: Reversed array:  [ 'Shiv', 'New Element', 5, 4, 2 ]

let joinedString = num.join(", ");  //Joining array elements into a string
console.log("Joined string: ",joinedString);  // output: Joined string:  Shiv, New Element, 5, 4, 2


let brr=[10,20,30,40,50];
let square=brr.map((num) => {
    return num*num;
});
console.log(square); // output: [ 100, 400, 900, 1600, 2500 ]

let evenNumbers = brr.filter((num) => {
    return num%20 === 0;
});
console.log(evenNumbers);  // output: [ 20, 40 ]    

let sumOfNumbers = brr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
console.log("Sum of numbers: ",sumOfNumbers);  // output: Sum of numbers:  150

let foundNumber = brr.find((num) => {
    return num > 25;
});
console.log("First number greater than 25: ",foundNumber);  // output: First number greater than 25:  30




//Iterating over array
console.log("Iterating over array:");
for(let i=0; i<num.length; i++){
    console.log(num[i]);
}




