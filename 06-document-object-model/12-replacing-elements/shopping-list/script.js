// 
function replaceFirstItem() {
  const firstItem = document.querySelector('li');

  const newEl = document.createElement('li');
  newEl.textContent = 'replaceFirst';

  firstItem.replaceWith(newEl);
}

replaceFirstItem();

// 
function replaceSecondItem() {
  const secondItem = document.querySelector('li:nth-child(2)');

  secondItem.outerHTML = '<li>replaceSecond</li>';
}

replaceSecondItem();

// 
function replaceAllItems() {
  const arr = document.querySelectorAll('li');

  // arr.forEach((element, index) => {
  //   element.outerHTML = `<li>item ${index + 1}</li>`;

  arr.forEach((item, index) => item.outerHTML = index === 1 ? '<li>Second Item</li>' : '<li>Item</li>')


  // const items = document.querySelector('ul').childElementCount;
  
  // for (let i = 0; i < items; i++) {
  //   let ogItem = document.querySelector(`li:nth-child(${i + 1})`);

  //   ogItem.outerHTML = `<li>newItem ${i + 1}</li>`;
  // }

  
}

replaceAllItems();

// 
function replaceChildHeading() {
  const header = document.querySelector('header');
  const h1 = document.querySelector('header h1');

  const h2 = document.createElement('h2');
  h2.id = 'app-title';
  h2.textContent = h1.textContent;

  header.replaceChild(h2, h1);
}

replaceChildHeading();