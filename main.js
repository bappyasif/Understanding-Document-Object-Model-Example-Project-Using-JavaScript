var formElement = document.getElementById("addForm");

var itemList = document.getElementById("items");

// Form Add Submit Event
formElement.addEventListener("submit", addItem);

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