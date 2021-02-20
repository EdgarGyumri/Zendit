const headerBurger = document.querySelector('.header-burger');
const headerWrapper = document.querySelector('.header-wrapper');
const headerList = document.querySelector('.header-list');
const headerBlock = document.querySelector('.header-block:last-child');

headerBurger.addEventListener('click', () => {
	headerWrapper.classList.toggle('header-nav__active');
	headerList.classList.toggle('header-nav__active1');
	headerBlock.classList.toggle('header-nav__active1');

})