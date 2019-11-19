// Mouse Events
//var anotherButton = document.getElementById("button").addEventListener("click", runEvent);
var anotherButton = document.getElementById("button");

anotherButton.addEventListener("click", runEvent);
anotherButton.addEventListener("dblclick", runEvent);

anotherButton.addEventListener("mousedown", runEvent);
anotherButton.addEventListener("mouseup", runEvent);

var box = document.getElementById("box");

box.addEventListener("mouseenter", runEvent);
box.addEventListener("mouseleave", runEvent);

box.addEventListener("mouseover", runEvent);
box.addEventListener("mouseout", runEvent);
box.addEventListener("mousemove", runEvent);

function runEvent(event) {
    console.log("Event type :  "+event.type);
    
    output.innerHTML = "<h3>MouseX: "+event.offsetX+" </h3><h3>MouseY: "+event.offsetY+"</h3";

    box.style.backgroundColor = "rgb("+event.offsetX+", "+event.offsetY+", 40)";

    document.body.style.backgroundColor = "rgb("+event.offsetX+", "+event.offsetY+", 40)"
}


// Different Events

var button = document.getElementById("button");

button.addEventListener(("click"), buttonClicked);

function buttonClicked(event) {
    console.log("Button Clicked");
    document.getElementById("header-title").textContent = "Header Changed";
    document.querySelector("#main").style.backgroundColor = "#f4f4f4";

    console.log(event);

    console.log(event.target);

    console.log(event.target.id);

    console.log(event.target.className);

    console.log(event.target.classList);

    var output = document.getElementById("output");
    output.innerHTML = "<h3>"+event.target.id+"</h3>";

    console.log(event.type);

    console.log(event.clientX);

    console.log(event.clientY);

    console.log(event.offsetX);

    console.log(event.offsetY);

    console.log(event.altKey);
    console.log(event.ctrlKey);
    console.log(event.shiftKey);

}


// // Traversing D.O.M.
// var itemList = document.querySelector("#items");

// // Parent Node
// console.log(itemList.parentNode);

// itemList.parentNode.style.backgroundColor = "#f4f4f4";

// console.log(itemList.parentElement);

// console.log(itemList.parentNode.parentNode);

// console.log(itemList.parentElement.parentElement);

// // Child Nodes
// console.log(itemList.childNodes);

// console.log(itemList.children);

// console.log(itemList.children[1]);

// itemList.children[1].style.backgroundColor = "yellow";

// console.log(itemList.firstChild);

// console.log(itemList.firstElementChild);

// itemList.firstElementChild.textContent = "Oh Hello";

// itemList.lastElementChild.textContent = "For Real!!";

// console.log(itemList.lastChild);

// console.log(itemList.lastElementChild);

// // Next Sibling
// console.log(itemList.nextSibling);

// console.log(itemList.nextElementSibling);

// // Previous Sibling
// console.log(itemList.previousSibling);

// console.log(itemList.previousElementSibling);

// itemList.previousElementSibling.style.color = "red";

// itemList.previousElementSibling.textContent = "Items Here";

// // Create Element
// var createElement = document.createElement("div");

// //Add Class
// createElement.className = "hello_class";

// // Add ID
// createElement.id = "hello_01";

// // Add Attribute
// createElement.setAttribute("title", "Hello Title");

// // Create New Text Nodes
// var createNewDivText = document.createTextNode("Hello World!!");

// // Appending Node
// createElement.appendChild(createNewDivText);

// // Placing Within This D.O.M.
// var containerDiv = document.querySelector("header .container");
// var headerTag = document.querySelector("header h1");

// console.log(createElement);

// createElement.style.fontSize = "30px";

// createElement.style.fontWeight = "bold";

// createElement.style.color = "blue";

// containerDiv.insertBefore(createElement, headerTag);

/*
console.log("Hello DOM");

console.dir(document);

// Examine DOM
console.log(document.domain);
console.log(document.URL);
console.log(document);
console.log(document.title);
//document.title = "Some Title";
console.log(document.title);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);


console.log(document.forms);
console.log(document.links);

console.log(document.images);

// Element Selector
console.log(document.getElementById("header-title"));

var headerTitle = document.getElementById("header-title");
console.log(headerTitle);

headerTitle.textContent = "What's Up?!";
console.log(headerTitle);

headerTitle.innerText = "You Better!?";
console.log(headerTitle);

//headerTitle.innerHTML = "<h1>Header Title</h1>";
headerTitle.style.borderBottom ="solid 3px #000";

var header = document.getElementById("main-header");
header.style.borderBottom = "solid 4px #000";

// Elements Selector
var li_items = document.getElementsByClassName("list-group-item");
console.log(li_items);
console.log(li_items[1]);
li_items[2].textContent = "Hello Bappy";
li_items[2].style.fontWeight = "bold";
li_items[3].innerText="Hi Hello";
li_items[3].style.backgroundColor = "yellow";
li_items[2].style.backgroundColor = "green";

//li_items.style.backgroundColor = "#f4f4f4";
 for(let i = 0; i <li_items.length; i++) {
     li_items[i].style.backgroundColor = "#f4f4f4";
     //li_items[i].style.backgroundColor = "yellow";
 }


 var li_tags = document.getElementsByTagName("li");
console.log(li_tags);
console.log(li_tags[1]);
li_tags[2].textCo
ntent = "Hello Bappy";
li_tags[2].style.fontWeight = "bold";
li_tags[3].innerText="Hi Hello";
li_tags[3].style.backgroundColor = "yellow";
li_tags[2].style.backgroundColor = "green";

//li_items.style.backgroundColor = "#f4f4f4";
 for(let i = 0; i <li_tags.length; i++) {
     li_tags[i].style.backgroundColor = "#f4f4f4";
     //li_tags[i].style.backgroundColor = "yellow";
 }


// Query Selector
var hedaerSelector = document.querySelector("#main-header");
hedaerSelector.style.borderBottom = "solid 4px #ccc";

var inputSelector = document.querySelector("input");
inputSelector.value = "Hello World!!";

var submitButton = document.querySelector("input[type='submit']");
submitButton.value = "SEND";

var itemsColouring = document.querySelector(".list-group-item");
itemsColouring.style.color = "Green";

var lastItem = document.querySelector(".list-group-item:last-child");
lastItem.style.color = "Aqua";

var nthItem = document.querySelector(".list-group-item:nth-child(2)");
nthItem.style.color = "coral";

// QuerySelector ALL
var htmlTitles = document.querySelectorAll(".title");
console.log(htmlTitles);

htmlTitles[1].textContent = "New Title";
console.log(htmlTitles);

var oddItems = document.querySelectorAll("li:nth-child(odd");
var evenItems = document.querySelectorAll("li:nth-child(even");

for(let i = 0; i<oddItems.length; i++) {
    oddItems[i].style.backgroundColor = "#f4f4f4";
    evenItems[i].style.backgroundColor = "#ccc";
}

*/