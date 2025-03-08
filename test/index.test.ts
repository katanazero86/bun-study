// /test/index.ts
import { test, expect } from "bun:test";

test('나의 첫 test', () => {
    const number = 1;
    expect(number).toBe(1);
});
