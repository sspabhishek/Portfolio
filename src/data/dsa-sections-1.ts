import { DSASection } from './dsa-types';

// Helper to generate LeetCode URL
const lc = (slug: string) => `https://leetcode.com/problems/${slug}/`;
const gfg = (slug: string) => `https://www.geeksforgeeks.org/problems/${slug}/1`;
const tuf = (slug: string) => `https://takeuforward.org/plus/dsa/problems/${slug}`;

export const dsaSections1: DSASection[] = [
  {
    title: 'Learn the basics',
    subSections: [
      {
        title: 'Things to Know in C++/Java/Python or any language',
        problems: [
          { id: 'b1', name: 'User Input / Output', difficulty: 'Easy', articleLink: tuf('user-input-output') },
          { id: 'b2', name: 'Data Types', difficulty: 'Easy', articleLink: tuf('data-types') },
          { id: 'b3', name: 'If Else Statements', difficulty: 'Easy', articleLink: tuf('if-else-statements') },
          { id: 'b4', name: 'Switch Statement', difficulty: 'Easy', articleLink: tuf('switch-statement') },
          { id: 'b5', name: 'What are Arrays, Strings?', difficulty: 'Easy', articleLink: tuf('arrays-strings') },
          { id: 'b6', name: 'For Loops', difficulty: 'Easy', articleLink: tuf('for-loops') },
          { id: 'b7', name: 'While Loops', difficulty: 'Easy', articleLink: tuf('while-loops') },
          { id: 'b8', name: 'Functions (Pass by Reference and Value)', difficulty: 'Easy', articleLink: tuf('functions') },
          { id: 'b9', name: 'Time Complexity', difficulty: 'Easy', articleLink: tuf('time-complexity') },
        ],
      },
      {
        title: 'Build-up Logical Thinking',
        problems: [
          {
            id: 'p1', name: 'Pattern 1 - Rectangular Star', difficulty: 'Easy', articleLink: tuf('pattern-1'),
            patternPreview: '* * * * *\n* * * * *\n* * * * *\n* * * * *\n* * * * *',
          },
          {
            id: 'p2', name: 'Pattern 2 - Right Angled Triangle', difficulty: 'Easy', articleLink: tuf('pattern-2'),
            patternPreview: '*\n* *\n* * *\n* * * *\n* * * * *',
          },
          {
            id: 'p3', name: 'Pattern 3 - Right Angled Number Triangle', difficulty: 'Easy', articleLink: tuf('pattern-3'),
            patternPreview: '1\n1 2\n1 2 3\n1 2 3 4\n1 2 3 4 5',
          },
          {
            id: 'p4', name: 'Pattern 4 - Right Angled Number Triangle II', difficulty: 'Easy', articleLink: tuf('pattern-4'),
            patternPreview: '1\n2 2\n3 3 3\n4 4 4 4\n5 5 5 5 5',
          },
          {
            id: 'p5', name: 'Pattern 5 - Inverted Right Pyramid', difficulty: 'Easy', articleLink: tuf('pattern-5'),
            patternPreview: '* * * * *\n* * * *\n* * *\n* *\n*',
          },
          {
            id: 'p6', name: 'Pattern 6 - Inverted Numbered Right Pyramid', difficulty: 'Easy', articleLink: tuf('pattern-6'),
            patternPreview: '1 2 3 4 5\n1 2 3 4\n1 2 3\n1 2\n1',
          },
          {
            id: 'p7', name: 'Pattern 7 - Star Pyramid', difficulty: 'Easy', articleLink: tuf('pattern-7'),
            patternPreview: '        *\n      * * *\n    * * * * *\n  * * * * * * *\n* * * * * * * * *',
          },
          {
            id: 'p8', name: 'Pattern 8 - Inverted Star Pyramid', difficulty: 'Easy', articleLink: tuf('pattern-8'),
            patternPreview: '* * * * * * * * *\n  * * * * * * *\n    * * * * *\n      * * *\n        *',
          },
          {
            id: 'p9', name: 'Pattern 9 - Diamond Star', difficulty: 'Easy', articleLink: tuf('pattern-9'),
            patternPreview: '        *\n      * * *\n    * * * * *\n  * * * * * * *\n* * * * * * * * *\n  * * * * * * *\n    * * * * *\n      * * *\n        *',
          },
          {
            id: 'p10', name: 'Pattern 10 - Half Diamond Star', difficulty: 'Easy', articleLink: tuf('pattern-10'),
            patternPreview: '*\n* *\n* * *\n* * * *\n* * * * *\n* * * *\n* * *\n* *\n*',
          },
          {
            id: 'p11', name: 'Pattern 11 - Binary Number Triangle', difficulty: 'Easy', articleLink: tuf('pattern-11'),
            patternPreview: '1\n0 1\n1 0 1\n0 1 0 1\n1 0 1 0 1',
          },
          {
            id: 'p12', name: 'Pattern 12 - Number Crown', difficulty: 'Easy', articleLink: tuf('pattern-12'),
            patternPreview: '1                 1\n1 2             2 1\n1 2 3         3 2 1\n1 2 3 4     4 3 2 1\n1 2 3 4 5 5 4 3 2 1',
          },
          {
            id: 'p13', name: 'Pattern 13 - Increasing Number Triangle', difficulty: 'Easy', articleLink: tuf('pattern-13'),
            patternPreview: '1\n2 3\n4 5 6\n7 8 9 10\n11 12 13 14 15',
          },
          {
            id: 'p14', name: 'Pattern 14 - Increasing Letter Triangle', difficulty: 'Easy', articleLink: tuf('pattern-14'),
            patternPreview: 'A\nA B\nA B C\nA B C D\nA B C D E',
          },
          {
            id: 'p15', name: 'Pattern 15 - Reverse Letter Triangle', difficulty: 'Easy', articleLink: tuf('pattern-15'),
            patternPreview: 'A B C D E\nA B C D\nA B C\nA B\nA',
          },
          {
            id: 'p16', name: 'Pattern 16 - Alpha-Ramp', difficulty: 'Easy', articleLink: tuf('pattern-16'),
            patternPreview: 'A\nB B\nC C C\nD D D D\nE E E E E',
          },
          {
            id: 'p17', name: 'Pattern 17 - Alpha-Hill', difficulty: 'Easy', articleLink: tuf('pattern-17'),
            patternPreview: '        A\n      A B A\n    A B C B A\n  A B C D C B A\nA B C D E D C B A',
          },
          {
            id: 'p18', name: 'Pattern 18 - Alpha-Triangle', difficulty: 'Easy', articleLink: tuf('pattern-18'),
            patternPreview: 'E\nD E\nC D E\nB C D E\nA B C D E',
          },
          {
            id: 'p19', name: 'Pattern 19 - Symmetric-Void', difficulty: 'Easy', articleLink: tuf('pattern-19'),
            patternPreview: '* * * * * * * * * *\n* * * *     * * * *\n* * *         * * *\n* *             * *\n*                 *\n*                 *\n* *             * *\n* * *         * * *\n* * * *     * * * *\n* * * * * * * * * *',
          },
          {
            id: 'p20', name: 'Pattern 20 - Symmetric-Butterfly', difficulty: 'Easy', articleLink: tuf('pattern-20'),
            patternPreview: '*                 *\n* *             * *\n* * *         * * *\n* * * *     * * * *\n* * * * * * * * * *\n* * * * * * * * * *\n* * * *     * * * *\n* * *         * * *\n* *             * *\n*                 *',
          },
          {
            id: 'p21', name: 'Pattern 21 - Hollow Rectangle', difficulty: 'Easy', articleLink: tuf('pattern-21'),
            patternPreview: '* * * * *\n*       *\n*       *\n*       *\n* * * * *',
          },
          {
            id: 'p22', name: 'Pattern 22 - The Number Pattern', difficulty: 'Easy', articleLink: tuf('pattern-22'),
            patternPreview: '5 5 5 5 5 5 5 5 5\n5 4 4 4 4 4 4 4 5\n5 4 3 3 3 3 3 4 5\n5 4 3 2 2 2 3 4 5\n5 4 3 2 1 2 3 4 5\n5 4 3 2 2 2 3 4 5\n5 4 3 3 3 3 3 4 5\n5 4 4 4 4 4 4 4 5\n5 5 5 5 5 5 5 5 5',
          },
        ],
      },
      {
        title: 'Know Basic Maths',
        problems: [
          { id: 'm1', name: 'Count Digits', difficulty: 'Easy', articleLink: tuf('count-all-digits-of-a-number'), leetcodeLink: lc('count-integer-substrings'), gfgLink: gfg('count-digits5716') },
          { id: 'm2', name: 'Reverse a Number', difficulty: 'Easy', articleLink: tuf('reverse-a-number'), leetcodeLink: lc('reverse-integer'), gfgLink: gfg('reverse-bits3556') },
          { id: 'm3', name: 'Check Palindrome', difficulty: 'Easy', articleLink: tuf('palindrome-number'), leetcodeLink: lc('palindrome-number'), gfgLink: gfg('palindrome0746') },
          { id: 'm4', name: 'GCD or HCF', difficulty: 'Easy', articleLink: tuf('gcd-of-two-numbers'), leetcodeLink: lc('find-greatest-common-divisor-of-array'), gfgLink: gfg('gcd-of-two-numbers3459') },
          { id: 'm5', name: 'Armstrong Number', difficulty: 'Easy', articleLink: tuf('check-if-the-number-if-armstrong'), leetcodeLink: lc('armstrong-number'), gfgLink: gfg('armstrong-numbers2727') },
          { id: 'm6', name: 'Print All Divisors', difficulty: 'Easy', articleLink: tuf('divisors-of-a-number'), gfgLink: gfg('number-of-factors1435') },
          { id: 'm7', name: 'Check for Prime', difficulty: 'Easy', articleLink: tuf('check-for-prime-number'), leetcodeLink: lc('count-primes'), gfgLink: gfg('prime-number2314') },
        ],
      },
      {
        title: 'Learn Basic Recursion',
        problems: [
          { id: 'r1', name: 'Print 1 to N using Recursion', difficulty: 'Easy', articleLink: tuf('print-1-to-n-using-recursion') },
          { id: 'r2', name: 'Print N to 1 using Recursion', difficulty: 'Easy', articleLink: tuf('print-n-to-1-using-recursion') },
          { id: 'r3', name: 'Sum of First N Numbers', difficulty: 'Easy', articleLink: tuf('sum-of-first-n-numbers'), leetcodeLink: lc('sum-of-all-subset-xor-totals') },
          { id: 'r4', name: 'Factorial of N numbers', difficulty: 'Easy', articleLink: tuf('factorial-of-n-numbers'), gfgLink: gfg('factorial5739') },
          { id: 'r5', name: 'Reverse an Array', difficulty: 'Easy', articleLink: tuf('reverse-an-array'), leetcodeLink: lc('reverse-string') },
          { id: 'r6', name: 'Check if String is Palindrome', difficulty: 'Easy', articleLink: tuf('check-if-string-is-palindrome'), leetcodeLink: lc('valid-palindrome') },
          { id: 'r7', name: 'Fibonacci Number', difficulty: 'Easy', articleLink: tuf('fibonacci-number'), leetcodeLink: lc('fibonacci-number'), gfgLink: gfg('print-first-n-fibonacci-numbers1002') },
        ],
      },
      {
        title: 'Learn Basic Hashing',
        problems: [
          { id: 'h1', name: 'Counting Frequencies of Array Elements', difficulty: 'Easy', articleLink: tuf('counting-frequencies'), gfgLink: gfg('frequency-of-array-elements-1587115620') },
          { id: 'h2', name: 'Find the Highest/Lowest Frequency Element', difficulty: 'Easy', articleLink: tuf('highest-lowest-frequency') },
        ],
      },
    ],
  },
  {
    title: 'Learn Important Sorting Techniques',
    subSections: [
      {
        title: 'Sorting-I',
        problems: [
          { id: 's1', name: 'Selection Sort', difficulty: 'Easy', articleLink: tuf('selection-sort'), gfgLink: gfg('selection-sort') },
          { id: 's2', name: 'Bubble Sort', difficulty: 'Easy', articleLink: tuf('bubble-sort'), gfgLink: gfg('bubble-sort') },
          { id: 's3', name: 'Insertion Sort', difficulty: 'Easy', articleLink: tuf('insertion-sort'), gfgLink: gfg('insertion-sort') },
        ],
      },
      {
        title: 'Sorting-II',
        problems: [
          { id: 's4', name: 'Merge Sort', difficulty: 'Medium', articleLink: tuf('merge-sort'), leetcodeLink: lc('sort-an-array'), gfgLink: gfg('merge-sort') },
          { id: 's5', name: 'Recursive Bubble Sort', difficulty: 'Easy', articleLink: tuf('recursive-bubble-sort') },
          { id: 's6', name: 'Quick Sort', difficulty: 'Medium', articleLink: tuf('quick-sort'), gfgLink: gfg('quick-sort') },
          { id: 's7', name: 'Radix Sort', difficulty: 'Medium', articleLink: tuf('radix-sort'), gfgLink: gfg('radix-sort') },
        ],
      },
    ],
  },
];
