//  arithmetic operators
 let a=10,b=2;
//  binary operator
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b)
//  unary operator
console.log(a++);
console.log(++a);
console.log(a--);
console.log(--a);


// Assignment operators =,+=,-=,*=,/=,%=,**=
let c=10;
c+=5;  //c=c+5
console.log(c);

let d=10;
d-=5; //d=d-5
console.log(d);

let e=10;
e*=5;   //e=e*5
console.log(e);

let f=10;
f/=5;  //f=f/5
console.log(f);


// comparison operators
//a=10 , b=2
console.log(a==b);  //false   // equality operator
console.log(a!=b); //true
console.log(a===b); //false   //strict equality operator
console.log(a!==b); //true
console.log(a>b);  //true
console.log(a<b);  //false
console.log(a>=b); //true
console.log(a<=b); //false


console.log('5'==5); //true
console.log('5'===5); //false

// logical operators
console.log(a>5 && b<5); //true
console.log(a>5 || b<5);
console.log(!(a>5)); //false


// ternary operator

let age=20;
let result=(age>=18) ? "eligible to vote" : "not eligible to vote";
console.log(result);

// bitwise operators
let x=5,y=3;
console.log(x & y); //1    //bitwise AND
console.log(x | y); //7    //bitwise OR
console.log(x ^ y); //6    //bitwise XOR    ---- same   same =0
console.log(~x); //-6      //bitwise NOT
console.log(x << 1); //10    //bitwise left shift
console.log(x >> 1); //2     //bitwise right shift



// Conditional statements 
let num=10;
if(num>0){
    console.log("positive number"); 
}
else if(num<0){
    console.log("negative number");
}else{
    console.log("zero");
}

// switch statement
switch(num){
    case 0:
        console.log("zero");        
        break;
    case 1:
        console.log("one");
        break;
    case 2:
        console.log("two");
        break;
    default:
        console.log("number is greater than 2");
}