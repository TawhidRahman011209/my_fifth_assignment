Answer the following questions clearly:

1) What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
**Ans:**
i) getElementById means selects one element by its id. Returns the element or null if not found.

ii) getElementsByClassName means selects all elements with that class. Returns a live HTMLCollection (updates if DOM changes).

iii)querySelector means selects the first element matching a CSS selector. Works with #id, .class, tag, or complex selectors.


2) How do you create and insert a new element into the DOM?
**Ans:** 
At first,we need to tell the browser what kind of element you want (for example, a paragraph, a heading, or a div). Then we give that element some text, or add things like a class name, an id, or styles. At last, we insert that element into the page by attaching it to another element that already exists, such as the body or a specific section.

Example: 
const idk = document.createElement("i");
newParagraph.textContent = "I am just writing this part as example of my answer";    
const container = document.getElementById("c");
container.appendChild(idk);


3) What is Event Bubbling and how does it work?
**Ans:**
The way browser events flow through a page after being triggered is known as event bubbling.
 The event is initially handled by the element itself when you interact with it (for example, by clicking a button).
 Until it reaches the document, the same event then "bubbles up" to its parent element, then to the parent's parent, and so forth.
 Every ancestor element with a listener for that event type will also run its handler unless you stop it.

 (I understand but I took some idea from ai in this question. )


4) What is Event Delegation in JavaScript? Why is it useful?
**Ans:**
You place one listener on a parent and use event.target to determine which child caused the event, rather than adding event listeners to numerous child elements.
Use:Code that is more effective and clean.

5) What is the difference between preventDefault() and stopPropagation() methods?
**Ans:**
i) preventDefault() means to blocks the browser’s default behavior.
ii) stopPropagation() means to blocks the event from moving up the DOM.
