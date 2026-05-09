//loop

for(let i=1;i<=5;i++){
    console.log(i);
}  
 output:
 1
 2
 3
 4
 5


// while loop
let j=1;
while(j<=5){
    console.log(j);
    j++;
}
// do while loop
let k=1;
do{
    console.log(k);
    k++;
}while(k<=5); 

//break;  ---> used to exit the loop
for(let i=1;i<=5;i++){
    if(i==3){
        break;
    }
    console.log(i);
}   
output:
1
2

//continue;  ---> used to skip the current iteration
for(let i=1;i<=5;i++){
    if(i==3){
        continue;
    }
    console.log(i);
}
output:
1   
2
4
5

//for in loop  ---> used to iterate over the properties of an object
let person={
    name:"Shivmohan",
    age:23,
    city:"Uttar Pradesh"
};

for(let key in person){
    console.log(key + ": " + person[key]);
}
output:
name: Shivmohan
age: 23
city: "Uttar Pradesh"

//for of loop  ---> used to iterate over the values of an iterable object like array
let numbers=[1,2,3,4,5];
for(let num of numbers){
    console.log(num);
}
output:
1
2
3
4
5


