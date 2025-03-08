const file = Bun.file("./test.txt");
console.log(file);

console.log(file.size, file.type, file.name, file.lastModified);

console.log("----------");
// 문자열, 바이너리 읽기
console.log(await file.text());
console.log(await file.arrayBuffer());

console.log("----------");
// 스트림, JSON 읽기
const decoder = new TextDecoder();
const stream = file.stream();
const reader = stream.getReader();
// 타입 에러
// Type 'ReadableStream<Uint8Array<ArrayBufferLike>>' must have a '[Symbol.asyncIterator]()' method that returns an async iterator.ts(2504)
// for await (const val of file.stream()) {
//     console.log(decoder.decode(val));
// }
while (true) {
  const { done, value } = await reader.read();
  if (done) break;
  console.log(decoder.decode(value));
}

// console.log(await file.json());

// 파일 쓰기, 복제 하기
const input = '빵야!';
const output = Bun.file('./write.txt');
await Bun.write(output, input);

const copy = Bun.file('./write.txt')
await Bun.write('./write-copy.txt', copy);