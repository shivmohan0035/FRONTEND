
//Prevent default actions       ex: anchor tag ka defalt action hota hai click karne par kisi dusre page par navigate karna, form submit karna etc. agar hume in default actions ko prevent karna hai to hum event.preventDefault() method ka use kar sakte hain. ye method event object ke andar hota hai jo event handler function ko pass kiya jata hai. jab hum event.preventDefault() method ko call karte hain, to ye default action ko prevent kar deta hai, aur hum apne custom logic ko execute kar sakte hain instead of the default behavior.

function click(event){
    event.preventDefault();   // This will prevent the default action of the anchor tag, which is to navigate to the specified URL when clicked. After this line of code is executed, clicking on the anchor tag will not navigate to "https://www.google.com" anymore, and you can add your custom logic in the click function to perform other actions when the anchor tag is clicked.
    let anchor=document.querySelector("#fanchor");
    anchor.textContent="Anchor clicked";   // This will change the text content of the anchor tag to "Anchor clicked" when it is clicked, instead of navigating to "https://www.google.com". You can replace this line with any custom logic you want to execute when the anchor tag is clicked.
}

let anchor=document.querySelector("#fanchor");

anchor.addEventListener("click", click);   // This will call the click function whenever the anchor tag is clicked, and the default action of navigating to "https://www.google.com" will be prevented due to the event.preventDefault() method called within the click function.

//Avoiding to manny event listeners
 
let paras=document.querySelectorAll("p");
// for(let i=0; i<paras.length; i++){
//     let para=paras[i];
//     para.addEventListener("click", function(){
//         alert("You click on para: " + i);   // This will change the text content of the clicked paragraph to "Paragraph clicked". However, if there are many paragraphs on the page, adding an event listener to each paragraph can lead to performance issues and make the code harder to maintain. Instead of adding individual event listeners to each paragraph, we can use event delegation by adding a single event listener to a common parent element (such as the body or a container div) and checking the target of the event to determine which paragraph was clicked. This approach can improve performance and simplify the code when dealing with a large number of elements.
//     }
// );
// }


function click(event){
    if(event.target.nodeName === 'SPAN'){
    alert("You have clicked on para: " + event.target.textContent);   // This will display an alert with the text content of the clicked paragraph. By using event delegation, we can add a single event listener to a common parent element (such as the body or a container div) and check the target of the event to determine which paragraph was clicked, without needing to add individual event listeners to each paragraph.
    }
}
// for(let i=0; i<paras.length; i++){
//     let para=paras[i];
//     para.addEventListener("click", click);   // This will add a click event listener to each paragraph, which will call the click function when any paragraph is clicked. However, as mentioned earlier, this approach can lead to performance issues and make the code harder to maintain if there are many paragraphs on the page. Instead, we can use event delegation by adding a single event listener to a common parent element and checking the target of the event to determine which paragraph was clicked.
// }


let mydiv=document.querySelector("#fdiv");
mydiv.addEventListener('click', click);   // This will add a click event listener to the div element with the id "mydiv". When any paragraph inside this div is clicked, the click function will be called, and the alert will display the text content of the clicked paragraph. This approach uses event delegation, allowing us to handle clicks on all paragraphs within the div with a single event listener, improving performance and simplifying the code.


