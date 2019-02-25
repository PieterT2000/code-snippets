//default display mode is none for checkout navbar
const checkoutNav = document.querySelector('.nav-checkout');

const showNav = () => {
	//set scroll property
	let y = window.scrollY;
	//set scroll height in px
	if (y > 800) {
		checkoutNav.style.display = 'block';
	} else {
		checkoutNav.style.display = 'none';
	}
};

window.addEventListener('scroll', showNav);
