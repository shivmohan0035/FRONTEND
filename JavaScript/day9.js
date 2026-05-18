//window object
//The window object is the global object in a web browser environment. It represents the browser window and provides properties and methods to interact with the browser and manipulate the content of the web page.
//  The window object is automatically created by the browser when a web page is loaded, and it serves as the top-level object in the JavaScript hierarchy.
//The window object has several important properties and methods, including:
//1. document: This property represents the Document Object Model (DOM) of the web page, allowing you to access and manipulate the elements on the page.
//2. alert(): This method displays an alert dialog box with a specified message and an OK button.
//3. console: This property provides access to the browser's console, allowing you to log messages and debug your code.
//4. setTimeout() and setInterval(): These methods allow you to schedule functions to be executed after a specified delay or at regular intervals.
//5. location: This property provides information about the current URL and allows you to navigate to different URLs.

//DOM (Document Object Model) ----->tree structure of objects representing the structure of an HTML or XML document
//The Document Object Model (DOM) is a programming interface for web documents.
//  It represents the structure of an HTML or XML document as a tree of objects, where each object corresponds to a part of the document (such as an element, attribute, or text node). The DOM allows developers to manipulate the content and structure of a web page dynamically using JavaScript. With the DOM, you can access and modify elements, attributes, and styles, as well as respond to user interactions and events on the page. The DOM is a crucial part of web development and is supported by all modern web browsers.

//BOM (Browser Object Model)
//The Browser Object Model (BOM) is a collection of objects that represent the browser and its components. It provides properties and methods to interact with the browser and manipulate the behavior of the web page. The BOM includes objects such as window, navigator, screen, history, and location. These objects allow developers to access information about the browser, control the browser's behavior, and respond to user interactions. The BOM is an essential part of web development and is supported by all modern web browsers.

//DOM manipulation   ---->change in HTML elements, attributes, and styles using JavaScript
//DOM manipulation refers to the process of using JavaScript to access and modify the elements, attributes, and styles of a web page. This allows developers to create dynamic and interactive web pages that can respond to user interactions and events. Some common methods for DOM manipulation include:
//1. getElementById(): This method allows you to access an element by its unique ID.
//2. getElementsByClassName(): This method allows you to access elements by their class name.
//3. getElementsByTagName(): This method allows you to access elements by their tag name.
//4. querySelector(): This method allows you to access an element using a CSS selector.
//5. querySelectorAll(): This method allows you to access multiple elements using a CSS selector.

document.getElementById("fpara");   //output: <p id="fpara" class="pclass">First paragraph</p>
document.querySelector("#fpara");   //output: <p id="fpara" class="pclass">First paragraph</p>

document.getElementsByClassName("pclass");  //output: HTMLCollection(4) [p#fpara.pclass, p#spara.pclass, p#tpara.pclass, p#fopara.pclass]
document.querySelectorAll(".pclass");   //output: NodeList(4) [p#fpara.pclass, p#spara.pclass, p#tpara.pclass, p#fopara.pclass]

document.getElementsByTagName("p");   //output: HTMLCollection(4) [p#fpara.pclass, p#spara.pclass, p#tpara.pclass, p#fopara.pclass]
document.querySelectorAll("p");   //output: NodeList(4) [p#fpara.pclass, p#spara.pclass, p#tpara.pclass, p#fopara.pclass]

document.querySelector("p");   //output: <p id="fpara" class="pclass">First paragraph</p>        ----> it will select the first <p> element in the document
document.querySelector(".pclass");   //output: <p id="fpara" class="pclass">First paragraph</p>   ---> it will select the first element with the class "pclass"

