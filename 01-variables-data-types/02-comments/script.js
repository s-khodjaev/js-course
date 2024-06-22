// A single line comment

/* console.log(100);

console.log('Hello World!');

console.log(20, 'Hello', true);*/

const x = 100;

console.log(x);

console.error('error');

console.warn('warning');

console.table({ name: 'skhodjaev', email: 'skhodjaev@gmail.com' });

console.group('simple');
console.log(x);
console.error('error');
console.warn('warning');
console.groupEnd();

const styles =
  'padding: 20px; background-color: white; color: red; font-weight: bold';

console.log('%cHello World', styles);

// Command + Shift + L - to select all highlighted text and change right away
// Command + Shift + O - search
// Command + B - toggle sidebar
// Control + ~ - toggle terminal
