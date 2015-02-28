// selecteer de fieldset die we aan en uit willen zetten
var fieldset = document.querySelector('fieldset:nth-of-type(2)');
var fieldset2 = document.querySelector('fieldset:nth-of-type(3)');

var resultaten1 = document.getElementById("resultaten_1");
var resultaten2 = document.getElementById("resultaten_2"); 

// hide deze fieldset
fieldset.classList.add('is-invisible');
fieldset2.classList.add('is-invisible');

resultaten1.classList.add('is-invisible');
resultaten2.classList.add('is-invisible');

// select first radio button you can find
document.querySelector('input[type="radio"]').onclick = function() {
	resultaten1.classList.add('is-visible');
	resultaten2.classList.remove('is-visible');
}

// select last radio button you can find
document.querySelector('input[type="radio"]:last-of-type').onclick = function() {
	resultaten1.classList.remove('is-visible');
	resultaten2.classList.add('is-visible');
}