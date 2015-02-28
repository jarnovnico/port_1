var inloggen = document.querySelector('header > p');
var winkelwagen = document.querySelector('header p:last-of-type');

inloggen.classList.add('is-visible');
winkelwagen.classList.add('is-invisible');


document.querySelector('header p:first-of-type').onclick = function() {
	winkelwagen.classList.remove('is-invisible');
	winkelwagen.classList.add('is-visible');
	inloggen.classList.remove('is-visible');
	inloggen.classList.add('is-invisible');

}

document.querySelector('header p:last-of-type').onclick = function() {
	winkelwagen.classList.remove('is-visible');
	winkelwagen.classList.add('is-invisible');
	inloggen.classList.remove('is-invisible');
	inloggen.classList.add('is-visible');

}