var input = document.getElementById("input");
var btn = document.getElementById("btn");
var qrCode = document.getElementById("qr-code");
const url = "https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=";

// Add event listener to button
btn.addEventListener("click", ()=>{
    var inputValue = input.value.replace(/\s+/g, ""); // Remove all spaces
    if(!inputValue){
        qrCode.innerHTML = "";
        qrCode.classList.remove("active");
    }else{
        qrCode.innerHTML = `
        <img src="${url}${inputValue}">`;
        qrCode.classList.add("active");
    }
})

// Add event listener to input field
input.addEventListener("input", ()=>{
    var inputValue = input.value.replace(/\s+/g, ""); // Remove all spaces
    if(!inputValue){
        qrCode.innerHTML = "";
        qrCode.classList.remove("active");
    }
})

input.addEventListener("keypress", function(event){
    if(event.keyCode === 13){
        var inputValue = input.value.replace(/\s+/g, ""); // Remove all spaces
    if(!inputValue){
        qrCode.innerHTML = "";
        qrCode.classList.remove("active");
    }else{
        qrCode.innerHTML = `
        <img src="${url}${inputValue}">`;
        qrCode.classList.add("active");
    }
    }
})