import { longestSubstringWithoutRepeatingChars } from "../challenges/largestSubstring";
import { largeStringsTestCases } from "../stubs";

describe("Large Subgstring Withouth Repeating", () => {
  largeStringsTestCases.forEach(({ input, expected }) => {
    test(`longestSubstringWithoutRepeatingChars('${input}') should return ${expected}`, () => {
      const result = longestSubstringWithoutRepeatingChars(input);
      expect(result).toBe(expected);
    });
  });
});
