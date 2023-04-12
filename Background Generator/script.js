var col1 = document.getElementById("color1");
var css = document.getElementById("h3");
var col2 = document.getElementById("color2");
var body = document.getElementById("body");

function addColor(){
    body.style.background = "linear-gradient(to right, "
                + col1.value
                +", "
                + col2.value
                + ")";
    
    css.textContent = body.style.background;
}

col1.addEventListener("input",addColor);
col2.addEventListener("input",addColor);