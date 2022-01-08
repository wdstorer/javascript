console.log("js loaded");

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var h3 = document.querySelector("h3");
var span_color1 = h3.span_color1;
var span_color2 = h3.span_color2
var body = document.getElementById("background-gradient");
var surprise_button = document.getElementById("generate-random");

function updateBackgroundGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
    h3.textContent = getComputedStyle(body).backgroundImage;
}

function randomGradient(){
    const random_hex_color_code = () => {
        let n = (Math.random() * 0xfffff * 1000000).toString(16);
        return '#' + n.slice(0, 6);
      };
    console.log(random_hex_color_code())
    color1.value = random_hex_color_code();
    color2.value = random_hex_color_code();
    updateBackgroundGradient();
}

color1.addEventListener("input", updateBackgroundGradient);
color2.addEventListener("input", updateBackgroundGradient);
surprise_button.addEventListener("click", randomGradient);
window.addEventListener("load", updateBackgroundGradient);