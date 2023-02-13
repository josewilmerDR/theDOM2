let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let mydiv = document.createElement("div")
	mydiv.innerHTML = "Hello World"
	mydiv.style.background = "yellow"
	document.body.appendChild(mydiv)

	
});