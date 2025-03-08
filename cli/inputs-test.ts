// inputs-test.ts

// alert
alert('안녕하세요? 1');
alert('안녕하세요? 2');

// confirm
const fun = confirm('Bun 재미있나요?');
if(fun) console.log(':)');
else console.log(':(');

// pormpt
const name = prompt('당신의 이름을 입력해주세요.', '');
console.log(`${name} 님, 안녕하세요!`);