const paragraph = document.createElement('p');
const text = document.createTextNode('her');
paragraph.appendChild(text);

paragraph.style['font-size'] = '30px';
paragraph.style['font-weith'] = '700';
paragraph.style.opacity = '.1';
paragraph.style.opacity = '.1';

const container = document.getElementById('container');
container.appendChild(paragraph);

const obj = {
	name: 'Dima',
	number: 23,
	'Lovely-font-size': 36,
}

obj['lovely-font-size']; // 36



















// title.innerHTML = 'New string';

// const par = document.querySelectorAll('.par');

// const chk = document.getElementById('.chk');
 
// par[0].innerHTML = 'Some text';
// par[1].innerHTML = 'Second';
// par[2].innerHTML = 'Third';
// par[3].innerHTML = 'Fourth';

const title = document.getElementById('title');

console.log(title.innerHTML);

title.style.color = 'red';
title.style['font-weith'] = '100';
title.style['background-color'] = '#000';