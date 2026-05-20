//Performance improvement  when adding elements using JS

//reflow --> process of calculating position / dimension of elemeent in browser page
        //  computationlly intensive task  <--- reflow required more time to perform task

//repaint ---> process of displaying content pixcel by pixcel on browser page

//measure the time taken to add 100 elements to the DOM

const t1=performance.now();
for(let i=1; i<=100; i++){
    //each time use reflow and repaint cost
    let newelement=document.createElement("p");
    newelement.textContent="This is paragraph " + (i);
    document.body.appendChild(newelement);
}
const t2=performance.now();

console.log(t2-t1);  // more time consume

const t3=performance.now();

// Document Fragment ---> light weight document object  ---->no take any  reflow and repaint when add element in document fragment
let mydiv=document.createDocumentFragment();
for(let i=1;i<=100;i++){
    let para=document.createElement('p');
    para.textContent="This is paragraph " +i;
    //no reflow and no repaint take
    mydiv.appendChild(para);
}
//only one time reflow and repaint cost
document.body.appendChild(mydiv);

const t4=performance.now();
console.log(t4-t3);   //less time consume

//Note  --> less no. of reflow and repaint then that code is more faster