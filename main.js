var mainInputField = document.getElementById("main__input--field");
var mainInputButton = document.getElementById("main__input--button");
var dogsName = document.getElementById("js__dog--title");
var bottomHowButton = document.getElementById("bottom__how--button");
var bottomWhatButton = document.getElementById("bottom__what--button");
var bottomFactsButton = document.getElementById("bottom__facts--button");
var textContainerA = document.getElementById("text-container-a");
var textContainerB = document.getElementById("text-container-b");
var textContainerC = document.getElementById("text-container-c");
var boxA = 0; 
var boxB = 0;
var boxC = 0;

mainInputButton.addEventListener('click', insertTitleText);
bottomHowButton.addEventListener('click', howTextState);
bottomWhatButton.addEventListener('click', whatTextState);
bottomFactsButton.addEventListener('click', factsTextState);

function insertTitleText(e) {
	e.preventDefault();
	dogsName.innerHTML = mainInputField.value;
	console.log(mainInputField.value);
}

function howTextState(){
	console.log('how text state works')
	if (boxA === 0) {
	textContainerA.style.display = "none";
	boxA++;
 } else if (boxA === 1) {
 	textContainerA.style.display = "inline";
 	boxA--;
 }
}

function whatTextState(){
	console.log('what text state works')
	if (boxB === 0) {
	textContainerB.style.display = "none";
	boxB++;
 } else if (boxB === 1) {
 	textContainerB.style.display = "inline";
 	boxB--;
 }
}

function factsTextState(){
	console.log('facts text state works')
	if (boxC === 0) {
	textContainerC.style.display = "none";
	boxC++;
 } else if (boxC === 1) {
 	textContainerC.style.display = "inline";
 	boxC--;
 }
}
