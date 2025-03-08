// /test/mock.test.ts

import { describe, expect, it, mock, spyOn } from "bun:test";

describe("mock tests", () => {
  it("함수 모킹", async () => {
    const msg = "fake data";
    const mockFn = mock(() => msg);
    expect(mockFn()).toEqual(msg); // 깊은 비교
  });

  it("Promise 모킹", async () => {
    const msg = "Hello";
    const mockPromise = mock(() => Promise.resolve(msg));
    expect(await mockPromise()).toBe(msg); // === 비교
  });

  it("호출 횟수", () => {
    const msg = "Hello";
    const mockFn = mock((text: string) => msg);

    mockFn("1");
    mockFn("2");

    expect(mockFn).toHaveBeenCalledTimes(2);
    expect(mockFn).toHaveBeenCalledWith("1");
    expect(mockFn).toHaveBeenCalledWith("2");
  });

  it("spyOn", () => {
    const calc = {
      add(x: number, y: number) {
        return x + y;
      },
      subtract(x: number, y: number) {
        return x - y;
      },
    };

    const spyAdd = spyOn(calc, "add"); // 해당 객체에 메서드 감시
    const addResult = calc.add(100, 100);

    // subtract 감시를 하는데, mockImplementation 을 통해서 실제 함수를 모의 함수로 대체하였다.
    const spySubtract = spyOn(calc, "subtract").mockImplementation(
      (x: number, y: number) => {
        return x * y; // 뺄셈이 곱하기가 되었다.
      }
    );
    const subtractResult = calc.subtract(1, 1);

    expect(addResult).toBe(200);
    expect(spyAdd).toHaveBeenCalledTimes(1);
    expect(spyAdd).toHaveBeenCalledWith(100, 100);

    expect(subtractResult).toBe(1);
  });
});
