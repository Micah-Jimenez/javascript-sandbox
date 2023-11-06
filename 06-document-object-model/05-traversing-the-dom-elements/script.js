// Get child elements
let output;

const parent = document.querySelector('.parent');

output = parent.children;
output = parent.children[0].innerText;
output = parent.children[0].className;
output = parent.children[0].nodeName;

parent.children[1].innerText = 'Child Two';
parent.children[1].style.color = 'orange';
parent.firstElementChild.innerText = 'Child One';
parent.lastElementChild.innerText = 'Child Three';

// Get Parent elements from a child

const child = document.querySelector('.child');
output = child.parentElement;
child.parentElement.style.backgroundColor = 'teal'
child.parentElement.style.padding = '10px';
child.parentElement.style.borderRadius = '10px';

// Sibling elements
const secondItem = document.querySelector('.child:nth-child(2)');

output = secondItem;
thirdItem = secondItem.nextElementSibling;
secondItem.nextElementSibling.style.color = 'gold';
secondItem.previousElementSibling.style.color = 'purple'

console.log(thirdItem.innerText);

