var btn = document.getElementById("btn");
var word = document.getElementById("type");
var items = document.getElementById("items");
var resetBtn = document.getElementById("reset");

function add(){
    let inpWord = word.value;
    if (inpWord !== '') { // check if input is not empty
        items.innerHTML += `
        <li>${inpWord}</li>
        `;
        word.value = ""; // Clear the input field after adding the item
    }
}

function reset(){
    items.innerHTML = ""; // Remove all items from the list
}

// Submit the form when the user presses the Enter key
word.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) { // 13 is the keycode for Enter key
        event.preventDefault(); // Prevent the default behavior of Enter key
        btn.click(); // Simulate a click on the "Add" button
    }
});

// Focus on the "type" input field when the user presses the Backslash key
document.addEventListener("keyup", function(event) {
    if (event.keyCode === 220) { // 220 is the keycode for Backslash key
        event.preventDefault(); // Prevent the default behavior of Backslash key
        word.focus(); // Focus on the "type" input field
    }
});

btn.addEventListener("click", add);
resetBtn.addEventListener("click", reset);
