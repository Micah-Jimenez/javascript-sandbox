const logo = document.querySelector('img');

function onClick(e) {
  // console.log(e.target);
  // console.log(e.currentTarget);
  // console.log(e.type);
  // console.log(e.timeStamp);
  // console.log(`X ${e.clientX}, Y ${e.clientY}`);
  // console.log(`X ${e.offsetX}, Y ${e.offsetY}`);
  // console.log(`X ${e.pageX}, Y ${e.pageY}`);
  console.log(`X ${e.screenX}, Y ${e.screenY}`);
}

logo.addEventListener('click', onClick)

// document.body.addEventListener('click', (e) => {
//   console.log(e.target);
//   console.log(e.currentTarget);
// })

document.querySelector('a').addEventListener('click', (e) => {
  e.preventDefault();
  alert('Access Denied');
})

function onDrag(e) {
  document.querySelector('h1').textContent = `X ${e.clientX}, Y ${e.clientY}`;
}

logo.addEventListener('drag', onDrag)

/*
- `target` - The element that triggered the event
- `currentTarget` - The element that the event listener is attached to (These are the same in this case
- `type` - The type of event that was triggered
- `timeStamp` - The time that the event was triggered
- `clientX` - The x position of the mouse click relative to the window
- `clientY` - The y position of the mouse click relative to the window
- `offsetX` - The x position of the mouse click relative to the element
- `offsetY` - The y position of the mouse click relative to the element
- `pageX` - The x position of the mouse click relative to the page
- `pageY` - The y position of the mouse click relative to the page
- `screenX` - The x position of the mouse click relative to the screen
- `screenY` - The y position of the mouse click relative to the screen
*/
