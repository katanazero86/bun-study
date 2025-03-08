// args-test.ts
// 명령줄 인자 읽기
// bun run args-test arg1 arg2 -o --option 

console.log(Bun.argv);

console.log(Bun.argv.slice(2));