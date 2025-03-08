// multiplication-table.ts

alert("구구단 프로그램을 시작합니다.");
while (true) {
  const input = prompt(">> 몇 단을 구할지 입력하세요:");
  if (input!.trim() === "" || input === undefined) {
    console.log("아무 값도 입력하지 않으셨습니다!");
  } else {
    const targetInput = input!.trim();
    if (isNaN(Number(targetInput))) {
      console.log("정수만 입력이 가능합니다!");
    } else {
      if (Number(targetInput) < 1 || Number(targetInput) > 9) {
        console.log("1~9 까지의 정수만 입력해주세요.");
      } else {
        for (let i = 1; i <= 9; i++) {
          console.log(`${input} * ${i} = ${Number(input) * i}`);
        }
      }
    }
  }

  const done = confirm(">> 구구단 프로그램을 종료할까요?");
  if (done) break;
}
