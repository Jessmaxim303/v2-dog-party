var bottomFactsButton = document.getElementById("bottom__facts--button");
var bottomHowButton = document.getElementById("bottom__how--button");
var bottomWhatButton = document.getElementById("bottom__what--button");
var dogsName = document.getElementById("js__dog--title");
var mainInputButton = document.getElementById("main__input--button");
var mainInputField = document.getElementById("main__input--field");
var textContainerA = document.getElementById("text__container--a");
var textContainerB = document.getElementById("text__container--b");
var textContainerC = document.getElementById("text__container--c");
var navMenuIcon = document.querySelector(".nav__menu--icon");
var navSection = document.querySelector(".nav__section");
var navSectionUl = document.querySelector(".nav__section--ul");

mainInputButton.addEventListener('click', insertTitleText);
bottomHowButton.addEventListener('click', howTextState);
bottomWhatButton.addEventListener('click', whatTextState);
bottomFactsButton.addEventListener('click', factsTextState);
navMenuIcon.addEventListener('click', topNav);

function insertTitleText(e) {
	e.preventDefault();
	dogsName.innerHTML = mainInputField.value;
}

// var mql = window.matchMedia('(max-width: 600px)');

function howTextState(){
  textContainerA.classList.toggle("text__container--display");
}

function whatTextState(){
  textContainerB.classList.toggle("text__container--display");
}

function factsTextState(){
  textContainerC.classList.toggle("text__container--display");
}

function topNav(){
	navSection.classList.toggle("nav__respon--section");
	navSectionUl.classList.toggle(".dropNav");
}

	// return (isMember ? "$2.00" : "$10.00");

	// if (navSection.className === "nav__section"){
	// console.log('top nav');
	// 	navSection.className =+ "responsive";
	// } else { 
	// 	navSection.className = "nav__section";