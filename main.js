var formElement = document.getElementById("addForm");

var itemList = document.getElementById("items");

var filterElemnt = document.getElementById("filter");

// Form Add Submit Event
formElement.addEventListener("submit", addItem);

// Delete Event
itemList.addEventListener("click", removeItem);

//Filter Event
filterElemnt.addEventListener("keyup", filterItems);

function addItem(event) {
    event.preventDefault();
    //console.log(2);

    // Get Submitted Input Value
    // var addedItem = document.getElementById("item");
    var addedItem = document.getElementById("item").value;

    // Create New Li Element
    var li_Element = document.createElement('li');

    // Add Class
    // li_Element = "list-group-item";
    // console.log(li_Element);

    li_Element.className = "list-group-item";
    console.log(li_Element);

    // Add Text Node With Form Input Submitted Value
    li_Element.appendChild(document.createTextNode(addedItem));

    // Create Delete Button Element
    var delButton = document.createElement("button");

    // Adding Class To Button
    delButton.className = "btn btn-danger btn-sm float-right delete";
    delButton.appendChild(document.createTextNode("X"));

    // Append deleteButton To Li
    li_Element.appendChild(delButton)

    // Append Li Item To List
    itemList.appendChild(li_Element);
}

function removeItem(event) {
    //console.log(event);

    if(event.target.classList.contains("delete")) {
        //console.log(2);
        if(confirm("You Sure About This")) {
            var li_child = event.target.parentElement;
            itemList.removeChild(li_child);
        }
    }
}

function filterItems(event) {
    // convert text to lowercase
    var convertedText = event.target.value.toLowerCase();
    //console.log(convertedText);
    // Get Li's
    var items = itemList.getElementsByTagName('li');
    //console.log(items);
    // Collection Array
    Array.from(items).forEach(function(item) {
        var itemName = item.firstChild.textContent;
        //console.log(itemName);
        if(itemName.toLowerCase().indexOf(convertedText) != -1) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}