var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var span = document.createElement("span");
	var btn = document.createElement("button");
	btn.id = input.value;
	btn.innerText = "delete me";
	span.appendChild(document.createTextNode(input.value + ' '));
	li.appendChild(span);
	li.appendChild(btn);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleListAfterClick(event) {
	console.log("clicked!");
	console.log(event);
	if (event.target.tagName === "BUTTON") {
		console.log("delete this!");
		event.target.parentNode.remove()
		//event.target.parentNode.parentNode.removeChild(event.target.parentNode)
	} else if (event.target.tagName === "SPAN") {
		console.log(event.target)
		console.log(event.target.classList.toggle("done"));
	}
}

function deleteListAfterClick(event) {
	console.log(event.target);
}

button.addEventListener("click", addListAfterClick);
ul.addEventListener("click", toggleListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);