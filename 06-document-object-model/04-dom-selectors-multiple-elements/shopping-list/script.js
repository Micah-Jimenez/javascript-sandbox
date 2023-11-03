// querySelectAll()

const listItems = document.querySelectorAll('.item');
// listItems.forEach((item, index) => {
//   item.style.color = 'blue';

//   if (index === 1) {
//     item.remove();
//   }

//   if (index === 0) {
//     item.innerHTML = `Oranges
//     <button class="remove-item btn-link text-red">
//       <i class="fa-solid fa-xmark"></i>
//     </button>`
//   }

// })

// for (const item of listItems) {
//   item.style.color = 'blue';
// }


const listItems2 = document.getElementsByClassName('item');

console.log(listItems2);
console.log(listItems2[0].innerText + ' ' + 'indexed');

arr = Array.from(listItems2);
arr.forEach(item => console.log(item.innerText))

const listItems3 = document.getElementsByTagName('li');
console.log(listItems3);
console.log(listItems3[3].innerText);
