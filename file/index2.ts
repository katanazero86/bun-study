import { mkdir, mkdirSync, readFileSync, writeFileSync, rmdir } from "node:fs";
import path from "node:path";

console.log(path.basename("C:\\temp\\myfile.html"));

mkdir("test", (err) => {
  if (err) console.error("폴더 생성 실패");
});

const data = readFileSync("./test.txt", "utf-8");
console.log(data);

writeFileSync("./test/kkk.txt", "뻑!", "utf-8");

// 삭제
// 파일이 있어서, 실패하니 recursive: true 설정을 해주고 진행하면 삭제가 된다.
rmdir("./test", (err) => {
  if (err) console.error(err);
});
