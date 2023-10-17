console.log(typeof(100));

const x = 100;
console.log(x);

console.error('Alert')

console.warn('warning')

console.table({name: 'Micah', email: 'mjsuperman44@gmail.com'})

console.group('simple')
console.log(x);
console.error('Alert')
console.warn('warning')
console.groupEnd()

const styles = 'padding: 10px; background-color: white; color: green;'
console.log('%cHello, World', styles);