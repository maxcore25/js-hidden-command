let str = '';
const reference = 'hello';

document.addEventListener('keypress', event => {
  str += event.key;
  console.log(str);
  if (reference.indexOf(str) !== 0) {
    str = '';
    return;
  }
  if (str === reference) {
    console.clear();
    console.log('Hi there! I am Max!');
    console.log('My GitHub: https://github.com/maxcore25');
    str = '';
  }
});
