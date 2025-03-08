// /test/params.test.ts
import { test, expect } from "bun:test";

// 입력 받은 배열을 reverse 해주는 함수
const reverseArr = (targetArr: string[]) => {
  return targetArr.toReversed();
};

test.each([
  [
    ["a", "b", "c"],
    ["c", "b", "a"],
  ],
  [
    ["hello", "world"],
    ["world", "hello"],
  ],
  [
    ["1", "2", "3", "4"],
    ["4", "3", "2", "1"],
  ],
])("reverseArr(%p) returns %p", (input, expected) => {
  expect(reverseArr(input)).toEqual(expected);
});
