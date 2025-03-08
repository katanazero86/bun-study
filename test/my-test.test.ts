// test/mt-test.test.ts
import {
  afterAll,
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  it,
} from "bun:test";

// 사칙연산 메서드를 가지는 계산기 객체
const calculator = () => ({
  add(x: number, y: number) {
    return x + y;
  },
  subtract(x: number, y: number) {
    return x - y;
  },
  multiply(x: number, y: number) {
    return x * y;
  },
  divide(x: number, y: number) {
    return x / y;
  },
});
let calc: ReturnType<typeof calculator> | null;

describe("계산기 tests", () => {
  beforeAll(() => {
    console.log("beforeAll");
  });
  afterAll(() => {
    console.log("afterAll");
  });

  beforeEach(() => {
    calc = calculator();
  });
  afterEach(() => {
    calc = null;
  });

  it("덧셈", () => {
    //const calc = calculator();
    expect(calc!.add(1, 1)).toBe(2);
  });
  it("뺄셈", () => {
    //const calc = calculator();
    expect(calc!.subtract(1, 1)).toBe(0);
  });
  it("곱셈", () => {
    //const calc = calculator();
    expect(calc!.multiply(9, 9)).toBe(81);
  });
  it("나눗셈", () => {
    //const calc = calculator();
    expect(calc!.divide(1, 2)).toBe(0.5);
  });
  it.todo("나눗셈 음수 테스트", () => {
    console.log("...");
  });
  it.skip("잠시 스킵", () => {
    //const calc = calculator();
    expect(calc).toBeObject();
  });
});
