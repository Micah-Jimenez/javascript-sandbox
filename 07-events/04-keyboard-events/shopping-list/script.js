
const itemInput = document.getElementById('item-input');

const onKeypress = (e) => {
  console.log('keypress event');
}

const onKeyDown = (e) => {
  // console.log('key down event');
  // key
  // if(e.key === 'Enter') {
  //   alert("key: You pressed Enter");
  // }

  // keyCode
  // https://www.toptal.com/developers/keycode/table
  // if(e.keyCode === 13) {
  //   alert("key code: You pressed Enter");
  // }

  // code
  if(e.code === 'Digit1'){
    console.log('You pressed 1');
  }
  
  if (e.repeat) {
    console.log('You are holding down' + ' ' + e.key);
  }

  // console.log('Shift: ' + e.shiftKey);
  // console.log('Ctrl: ' + e.ctrlKey);
  // console.log('Shift: ' + e.altKey);

  if (e.shiftKey && e.key === 'K') {
    console.log('You hit shift + K');
  }
}
const onKeyUp = (e) => {
  console.log('key up event');
}

// itemInput.addEventListener('keypress', onKeypress);
itemInput.addEventListener('keydown', onKeyDown);
// itemInput.addEventListener('keyup', onKeyUp);