import { bubbleSort } from "../challenges/bubbleSort";
import { bubbleSortTestCases } from "../stubs";

describe("Bubble Sort", () => {
  bubbleSortTestCases.forEach(([arr, expected]) => {
    test(`bubbleSort(${arr}) returns ${expected}`, () => {
      const result = bubbleSort(arr);
      expect(result).toEqual(expected);
    });
  });
});
