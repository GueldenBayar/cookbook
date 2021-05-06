'use strict';

const one = document.getElementById('one')
const hideOne = document.querySelector('.none-one')
const two = document.getElementById('two')
const hideTwo = document.querySelector('.none-two')
const three = document.getElementById('three')
const hideThree = document.querySelector('.none-three')

one.addEventListener('click', () => {
	if(hideOne.classList.contains('none-one')){
		hideOne.classList.remove('none-one')
	} else {
		hideOne.classList.add('none-one')
	}
})
two.addEventListener('click', () => {
	if(hideTwo.classList.contains('none-two')){
		hideTwo.classList.remove('none-two')
	} else {
		hideTwo.classList.add('none-two')
	}
})
three.addEventListener('click', () => {
	if(hideThree.classList.contains('none-three')){
		hideThree.classList.remove('none-three')
	} else {
		hideThree.classList.add('none-three')
	}
})