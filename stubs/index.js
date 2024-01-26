export const bubbleSortTestCases = [
  [
    [5, 3, 8, 2, 1, 4],
    [1, 2, 3, 4, 5, 8]
  ],
  [[], []],
  [[1], [1]],
  [
    [9, 5, 2, 7, 1],
    [1, 2, 5, 7, 9]
  ],
  [
    [3, 3, 3, 3],
    [3, 3, 3, 3]
  ],
  [
    [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  ],
  [
    [2, 4, 6, 8, 10],
    [2, 4, 6, 8, 10]
  ],
  [
    [10, 8, 6, 4, 2],
    [2, 4, 6, 8, 10]
  ],
  [
    [100, 5, 9, 0, 78, 2],
    [0, 2, 5, 9, 78, 100]
  ],
  [
    [-1, -5, 0, 3, -2, 4],
    [-5, -2, -1, 0, 3, 4]
  ]
];

export const palindromeTestCases = [
  { input: "A man a plan a canal Panama", expected: true },
  { input: "racecar", expected: true },
  { input: "Hello World", expected: false },
  { input: "12321", expected: true },
  { input: "Drink water is awesome", expected: false },
  { input: "Madam Arora teaches malayalam", expected: false },
  { input: "Never odd or even", expected: true },
  { input: "Palindrome", expected: false },
  { input: "Was it a car or a cat I saw", expected: true },
  { input: "Step on no pets", expected: true }
];

export const largeStringsTestCases = [
  { input: "abcdefghijklmnopqrstuvwxyz", expected: 26 },
  { input: "ABDEFGABEF", expected: 6 },
  { input: "abcdefgabcdefg", expected: 7 },
  { input: "abbaacdef", expected: 5 },
  { input: "abcabcbbxyz", expected: 4 },
  {
    input: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
    expected: 52
  },
  { input: "aabccddefghijklmmnop", expected: 10 },
  { input: "abccdefghijklmnopqrsstuvwwxyz", expected: 17 },
  {
    input: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    expected: 62
  },
  {
    input: "aaaabbbccccccdddddddddddeeeeeeeeeeeeeeffffffffffffffffff",
    expected: 2
  }
];

export const partialSumTestCases = [
  { input: [10, 20], expected: 30 },
  { input: [5, 5], expected: 10 },
  { input: [-2, -2], expected: -4 },
  { input: [1800, 1200], expected: 3000 },
  { input: [0, 0], expected: 0 },
  { input: [1, 1], expected: 2 },
  { input: [10, 10], expected: 20 },
  { input: [10000, 20000], expected: 30000 },
  { input: [1.5, 2.5], expected: 4 },
  { input: [3.1416, 3.1416], expected: 6.2832 }
];
