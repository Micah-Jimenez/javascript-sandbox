function removeClearBtn() {
  document.querySelector('#clear').remove();
};

removeClearBtn();

// 
function removeFirstItem() {
  const ul = document.querySelector('ul');
  const li = document.querySelector('li');

  ul.removeChild(li);
}

// removeFirstItem();

// 
function removeItem(itemNumber) {
  const ul = document.querySelector('ul');
  const li = document.querySelector(`li:nth-child(${itemNumber})`);

  ul.removeChild(li);
}
function removeItem2(itemNumber) {
  const arr = document.querySelectorAll('li');
  arr[itemNumber - 1].remove();
}

// removeItem(3);
removeItem2(4);