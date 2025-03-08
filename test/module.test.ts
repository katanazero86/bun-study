// /test/module.test.ts
import { expect, mock, it, describe } from "bun:test";
import { sendMail, sendSMS } from "./notification.ts";

mock.module("./notification", () => ({
  sendMail: mock(),
  sendSMS: mock(),
}));

describe("Module 모킹", () => {
  it("sendMail", () => {
    sendMail("test@naver.com", "안녕하세요?");

    expect(sendMail).toHaveBeenCalledTimes(1);
    expect(sendMail).toHaveBeenCalledWith("test@naver.com", "안녕하세요?");
  });

  it("sendSMS", () => {
    sendSMS("test@naver.com", "안녕하세요?");

    expect(sendSMS).toHaveBeenCalledTimes(1);
    expect(sendSMS).toHaveBeenCalledWith("test@naver.com", "안녕하세요?");
    expect(sendSMS).toHaveBeenCalled();
  });
});
