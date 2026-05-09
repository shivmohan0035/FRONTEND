//Loop

for(let i=0;i<5;i++){
    console.log(i);
}

output:
0   
1   
2   
3   
4

//While loop
let i=0;
while(i<5){
    console.log(i);
    i++;
}

//Do while loop
let j=0;        
do{
    console.log(j);
    j++;
}while(j<5);

 //break;  // to exit the loop
//continue; // to skip the current iteration and move to the next iteration

//For in loop       
let person={
    name:"John",
    age:30,
    city:"New York"
}   
for(let key in person){
    console.log(key+": "+person[key]); // to get the keys and values
}

//For of loop
let arr=[1,2,3,4,5];
for(let value of arr){
    console.log(value);
}   
