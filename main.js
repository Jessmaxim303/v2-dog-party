var mainInputField = document.getElementById("main__input--field");
var mainInputButton = document.getElementById("main__input--button");
var dogsName = document.getElementById("js__dog--title");

mainInputButton.addEventListener('click', insertTitleText);

function insertTitleText(e) {
	e.preventDefault();
	dogsName.innerHTML = mainInputField.value;
	console.log(mainInputField.value);
}