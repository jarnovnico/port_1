// selecteer de fieldset die we aan en uit willen zetten
var aside = document.getElementById("aside");

// hide deze fieldset
aside.classList.add('is-visible');

// select first radio button you can find
document.querySelector('input[type="radio"]').onclick = function() {
	aside.classList.add('is-invisible');
	aside.classList.remove('is-visible');
}