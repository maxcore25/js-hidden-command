let buffer = '';
const command = 'hello';
const str1 = '72|105|32|116|104|101|114|101|33|32|73|32|97|109|32|77|97|120|33';
const str2 =
  '77|121|32|71|105|116|72|117|98|58|32|104|116|116|112|115|58|47|47|103|105|116|104|117|98|46|99|111|109|47|109|97|120|99|111|114|101|50|53';

document.addEventListener('keypress', event => {
  buffer += event.key;
  if (command.indexOf(buffer) !== 0) {
    buffer = '';
    return;
  }
  if (buffer === command) {
    console.log(text(str1));
    console.log(text(str2));
    buffer = '';
  }
});

// * Encoding
// let str2 = 'There is any string you want to encode';
// let crypted = str2
//   .split('')
//   .map(value => value.charCodeAt(0))
//   .join('|');
// console.log(crypted);

// * Decoding
const text = str =>
  str
    .split('|')
    .map(item => String.fromCharCode(item))
    .join('');
