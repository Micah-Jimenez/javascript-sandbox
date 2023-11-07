const text = document.querySelector('p');
const itemList = document.querySelector('.item-list');
const items = itemList.querySelectorAll('li');

function run() {
  // className
  // text.className = 'dark card';

  // classList
  console.log(itemList.classList);

  itemList.classList.forEach(c => console.log(c))

  // text.classList.add('dark');
  // text.classList.remove('card');

  // text.classList.toggle('hidden');\
  // text.classList.replace('card', 'dark');

  // Change style
  // itemList.style.lineHeight = '3';

  items.forEach((item, index) => index === 1 ? item.style.color = 'blue' : item.style.color = 'red')
}

document.querySelector('button').onclick = run;
