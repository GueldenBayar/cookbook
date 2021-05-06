'use strict';

const menu = document.querySelector('.none')
const lunch = document.querySelector('.none-two')
const dinner = document.querySelector('.none-three')
const btn = document.querySelector('.fas')

btn.addEventListener('click', e =>{
	menu.classList.toggle('none')
})

