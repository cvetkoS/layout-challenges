const createButton = document.querySelector('.js-button-create');
const menu = document.querySelector('.js-nav-menu');

function checkMenu(e) {
	e.preventDefault();
	menu.classList.contains('active') ? menu.classList.remove('active') : menu.classList.add('active');
}

createButton.addEventListener('click', checkMenu);
