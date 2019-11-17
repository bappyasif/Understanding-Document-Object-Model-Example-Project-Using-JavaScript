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
li_tags[2].textContent = "Hello Bappy";
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