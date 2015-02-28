// selecteer de fieldset die we aan en uit willen zetten
var fieldset = document.querySelector('fieldset:nth-of-type(3)');
var fieldset2 = document.querySelector('fieldset:nth-of-type(4)'); 

// hide deze fieldset
fieldset.classList.add('is-invisible');
fieldset2.classList.add('is-invisible');

// select first radio button you can find
document.querySelector('input[type="radio"]').onclick = function() {
	fieldset.classList.add('is-visible');
	fieldset2.classList.remove('is-visible');
}

// select last radio button you can find
document.querySelector('input[type="radio"]:last-of-type').onclick = function() {
	fieldset.classList.remove('is-visible');
	fieldset2.classList.add('is-visible');
}