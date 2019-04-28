document.addEventListener('DOMContentLoaded', () => {

	let heroImage = document.querySelector('.hero__image img').src;
	document.querySelector('body').style.backgroundImage = 'url(' + heroImage + ')';

});


let showMenu = () => document.querySelector('.menu-panel').classList.add('menu-panel--active')
let hideMenu = () => document.querySelector('.menu-panel').classList.remove('menu-panel--active')
