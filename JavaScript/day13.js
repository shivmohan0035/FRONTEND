//Event loop   -->it shows how asynchronous code execute  --->there are 3 components: 
// 1)Call stack  
// 2) browser   <--store asychronous line jitna time ke liye duration diya rahega.  
// (3)Callback queue    <--after duration complete in browser then store in call back queue . asychronous line send to call stack by event loop when stack will empty. then execute asynchronous line

//synchronous code  ---> runs in order immediately  --->line of code execute at same time immediately
console.log('Shivmohan');
console.log(10);
console.log("Hi");

//asynchronous code  --->aisa code jo same time pe execute nhi hota --->

function print(){
    console.log("waiting for at least 3 second");
}

console.log("start");
setTimeout(print,3000);
console.log("End");


//Promise  ---->Promise is object that represent eventual completion or failure of async operation  --->promise asynchronous ka value bhi return karta hai (o achtual ans na ho ke koi promise hota hai jo return krta hai)  like synchronous methods return.

// Promise has 3 states:
// 1) Pending - initial state, operation hasn't completed yet
// 2) Fulfilled/Resolved - operation completed successfully
// 3) Rejected - operation failed

// Creating a Promise
const myPromise = new Promise((resolve, reject) => {
    let success = true;
    
    setTimeout(() => {
        if(success) {
            resolve("Operation successful!"); // Fulfilled state
        } else {
            reject("Operation failed!"); // Rejected state 
        }
    }, 2000);
});

// Consuming a Promise using .then() ---> promise ke fulfill hone ke baad koi task karna ho and
//  .catch()--->agar promise fail ho gya then execute
myPromise
    .then((result) => {
        console.log(result); // Runs if promise is resolved       //output: Operation successful!
    })
    .catch((error) => {
        console.log(error); // Runs if promise is rejected       //output: Operation failed!
    });

// myPromise.then((message)=>{
//     console.log("First msg: " + message);             //output: First msg: Operation successful
//     return 20;   //message for just next .then() block   
//   }).then((message)=>{                        
//     console.log("Second Msg: "+message);      //output: Second Msg: 20
//     return 30;
// }).then((message)=>{
//     console.log("Third msg: "+message);       //output: Third msg: 30
// }).catch((error)=>{
//     console.log(error);          //output: Operation failed
// }).finally((message)=>{
//     console.log("I am always executed");    //output: I am always executed
// });


// Promise.all() - waits for ALL promises to resolve
const promise1 = Promise.resolve(10);
const promise2 = new Promise((resolve) => setTimeout(() => resolve(20), 1000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve(30), 500));

Promise.all([promise1, promise2, promise3])
    .then((results) => {
        console.log("All promises resolved:", results); // [10, 20, 30]
    });

// Promise.race() - returns result of FIRST promise that settles
Promise.race([promise1, promise2, promise3])
    .then((result) => {
        console.log("First promise completed:", result);
    });