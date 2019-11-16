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


