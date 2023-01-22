const h1 = document.querySelector('h1')
const div = document.createElement('div');
div.textContent = 'An injected script';
h1?.insertAdjacentElement('afterend', div) 