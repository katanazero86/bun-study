// /test/date.test.ts

import { test, beforeEach, expect, setSystemTime } from "bun:test";

beforeEach(() => {
  setSystemTime(); // 시간이 정상적으로 흘러감.
});

test("current time", () => {
  setSystemTime(new Date("2025-03-08"));
  expect(new Date()).toEqual(new Date("2025-03-08"));
});
