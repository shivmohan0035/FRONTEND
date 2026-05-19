let element=document.querySelector("#div1");
element.innerHTML //output: \n        <p id="fpara" class="pclass">Hello ji</p>\n        <h1 id="h2" class="hclass"  >Heading 2</h1>\n               -----> it will return the HTML content of the element, including all the tags and their attributes. It will preserve the line breaks and spacing in the HTML code.
element.innerText //output: Hello ji\nHeading 2                                  ------> it will return the visible text content of the element, excluding any HTML tags and hidden elements. It will also preserve the line breaks and spacing in the text.
element.textContent //output: \n        Hello ji\n        Heading 2\n                  ------> it will return the text content of the element, including all text within the element and its descendants, regardless of whether it is visible or hidden. It will not preserve the line breaks and spacing in the text.

//element.innerHTML="<h1>New Heading </h1>";   //output: <h1>New Heading </h1>   ------> This will replace the existing HTML content of the element with the new HTML content specified in the string. The new content will be parsed and rendered as HTML, and any existing content will be removed. After this line of code is executed, the element will contain only the new heading, and the previous paragraph and heading will be removed from the DOM.

//appending content to an element
let fheading=document.createElement("h1");
fheading.textContent="This is a new heading";

let element=document.querySelector("body");
element.appendChild(fheading);   // This will add the new heading as a child of the element, without removing any existing content. The new heading will be added at the end of the existing content within the element.
element    //output: <body>\n    <div id="div1" class="dclass">\n        <p id="fpara" class="pclass">Hello ji</p>\n        <h1 id="h2" class="hclass"  >Heading 2</h1>\n    </div>\n    <h1>This is a new heading</h1>\n</body>   -----> The new heading is added at the end of the existing content within the body element, and the previous content remains unchanged.

let element=document.querySelector("#div1");

let newelement=document.createElement("p");
newelement.textContent="This is a new paragraph";
element.insertAdjacentElement("beforebegin", newelement);   // This will insert the new paragraph as the last child of the element, without removing any existing content. The new paragraph will be added after all existing content within the element.
element.insertAdjacentElement("afterbegin", newelement);   // This will insert the new paragraph as the first child of the element, without removing any existing content. The new paragraph will be added before all existing content within the element.
element.insertAdjacentElement("beforeend", newelement);   // This will insert the new paragraph as the last child of the element, without removing any existing content. The new paragraph will be added after all existing content within the element.
element.insertAdjacentElement("afterend", newelement);   // This will insert the new paragraph immediately after the element, without removing any existing content. The new paragraph will be added as a sibling of the element, following it in the DOM tree. 


//Browser events   -----> click,keypress,mouseover,mouseout,submit,change,load,resize,scroll

//events are actions or occurrences that happen in the browser, such as user interactions (clicks, key presses, mouse movements) or changes in the state of the web page (loading, resizing). Events allow developers to create interactive and dynamic web pages by responding to user actions and other events that occur in the browser. Some common types of events include:
//1. Click events: These occur when a user clicks on an element, such as a button or a link.
//2. Keyboard events: These occur when a user presses a key on the keyboard, such as keydown, keyup, and keypress events.
//3. Mouse events: These occur when a user interacts with the mouse, such as mouseover, mouseout, and mousemove events.
//4. Form events: These occur when a user interacts with form elements, such as submit, change, and input events.
//5. Window events: These occur when there are changes to the browser window, such as load, resize, and scroll events.

//evert target ---> it is the element on which the event occurred. For example, if a user clicks on a button, the event target would be that button element. The event target can be accessed using the event object that is passed to the event handler function. It allows developers to identify which element triggered the event and perform actions based on that element.

//event listeners ---> it is a function that is called when a specific event occurs on an element. Event listeners allow developers to respond to user interactions and other events in the browser. They can be added to elements using the addEventListener() method, which takes two arguments: the type of event to listen for (such as "click" or "keydown") and the function to be called when the event occurs. Event listeners can be used to perform various actions, such as updating the content of a web page, changing styles, or making API calls in response to user interactions.

function handleClick(event) {
    let fpara = document.getElementById("fpara");
    fpara.textContent="Shivmohan";
}   
let fpara = document.getElementById("fpara");
fpara.addEventListener("click", handleClick);   // This will call the handleClick function whenever the paragraph is clicked
 
//fpara.removeEventListener("click", handleClick);   // This will remove the event listener from the paragraph, so clicking on it will no longer trigger the handleClick function. After this line of code is executed, clicking on the paragraph will not change its text content to "Shivmohan" anymore.


//phase of event propagation
//1. Capturing phase: In this phase, the event starts from the window object and travels down to the target element.
//2. Target phase: In this phase, the event reaches the target element where it occurred.
//3. Bubbling phase: In this phase, the event bubbles up from the target element back to the window object. by default Event listeners addEventListener() execute in the bubbling phase ;

