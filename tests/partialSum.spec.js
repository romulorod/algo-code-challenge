import { partialSum } from "../challenges/partialSum";
import { partialSumTestCases } from "../stubs";

describe("Partial Sum", () => {
  partialSumTestCases.forEach(({ input, expected }) => {
    test(`partialSum(${input[0]})(${input[1]}) should return ${expected}`, () => {
      const result = partialSum(input[0])(input[1]);
      expect(result).toBe(expected);
    });
  });
});
