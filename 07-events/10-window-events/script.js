// On Page Load
// window.onload = function () {
//   document.querySelector('h1').textContent = 'Hello World';
// };

// 'load' waits for all resources to be loaded
window.addEventListener('load', () => console.log('Page Loaded'));

// 'DOMContentLoaded' only waits for the DOM to finish loading
window.addEventListener('DOMContentLoaded', () => console.log('DOM Loaded'));

window.addEventListener('resize', () => {
  document.querySelector('h1').innerText = `resized to Width: ${window.innerWidth} Height: ${window.innerHeight}`;
});

window.addEventListener('scroll', () => {
  console.log(`Scroll position: ${window.scrollX} X ${scrollY}`);
  if (window.scrollY > 70) {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
  } else {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  }
});

window.addEventListener('focus', () => {
  document.querySelectorAll('p').forEach(p => {
    p.style.color = 'blue';
  })
});
window.addEventListener('blur', () => {
  document.querySelectorAll('p').forEach(p => {
    p.style.color = 'red';
  })
});
