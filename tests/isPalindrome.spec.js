// @ts-nocheck
import { isPalindrome } from "../challenges/isPalindrome";
import { palindromeTestCases } from "../stubs";

describe("Palindrome Checker", () => {
  palindromeTestCases.forEach(({ input, expected }) => {
    test(`isPalindrome('${input}') should return ${expected}`, () => {
      expect(isPalindrome(input)).toBe(expected);
    });
  });
});
