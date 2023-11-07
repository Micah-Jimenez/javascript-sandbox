function onClear() {
  arr = document.querySelectorAll('li');
  arr.forEach(item => item.remove())
}

const clearBtn = document.querySelector('#clear');

// JavaScript Event Listener
// clearBtn.onclick = function () {
//   alert('clear');
// };

// clearBtn.onclick = function () {
//   console.log('clear');
// };

// addEventListener()
// clearBtn.addEventListener('click', () => alert('clear all'));

// clearBtn.addEventListener('click', () => console.log('clear all'));

clearBtn.addEventListener('click', onClear);
// setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000);

// setTimeout(() => clearBtn.click(), 5000);