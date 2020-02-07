window.addEventListener('storage', () => {
	const secondIndexPage = document.querySelector('body');
	secondIndexPage.style.backgroundColor = JSON.parse(localStorage.getItem('bg'));
});