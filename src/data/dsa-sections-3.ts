import { DSASection } from './dsa-types';

const lc = (slug: string) => `https://leetcode.com/problems/${slug}/`;
const gfg = (slug: string) => `https://www.geeksforgeeks.org/problems/${slug}/1`;
const tuf = (slug: string) => `https://takeuforward.org/plus/dsa/problems/${slug}`;

export const dsaSections3: DSASection[] = [
  {
    title: 'Strings [Basic and Medium]',
    subSections: [
      {
        title: 'Basic and Easy String Problems',
        problems: [
          { id: 'str1', name: 'Remove Outermost Parentheses', difficulty: 'Easy', leetcodeLink: lc('remove-outermost-parentheses') },
          { id: 'str2', name: 'Reverse Words in a String', difficulty: 'Medium', leetcodeLink: lc('reverse-words-in-a-string'), gfgLink: gfg('reverse-words-in-a-given-string5459') },
          { id: 'str3', name: 'Largest Odd Number in String', difficulty: 'Easy', leetcodeLink: lc('largest-odd-number-in-string') },
          { id: 'str4', name: 'Longest Common Prefix', difficulty: 'Easy', leetcodeLink: lc('longest-common-prefix'), gfgLink: gfg('longest-common-prefix-in-an-array5129') },
          { id: 'str5', name: 'Isomorphic Strings', difficulty: 'Easy', leetcodeLink: lc('isomorphic-strings'), gfgLink: gfg('isomorphic-strings-1587115620') },
          { id: 'str6', name: 'Rotate String', difficulty: 'Easy', leetcodeLink: lc('rotate-string') },
          { id: 'str7', name: 'Check if Two Strings are Anagrams', difficulty: 'Easy', leetcodeLink: lc('valid-anagram'), gfgLink: gfg('anagram-1587115620') },
        ],
      },
      {
        title: 'Medium String Problems',
        problems: [
          { id: 'str8', name: 'Sort Characters by Frequency', difficulty: 'Medium', leetcodeLink: lc('sort-characters-by-frequency') },
          { id: 'str9', name: 'Maximum Nesting Depth of Parentheses', difficulty: 'Easy', leetcodeLink: lc('maximum-nesting-depth-of-the-parentheses') },
          { id: 'str10', name: 'Roman to Integer', difficulty: 'Easy', leetcodeLink: lc('roman-to-integer'), gfgLink: gfg('roman-number-to-integer3201') },
          { id: 'str11', name: 'Integer to Roman', difficulty: 'Medium', leetcodeLink: lc('integer-to-roman') },
          { id: 'str12', name: 'Implement Atoi', difficulty: 'Medium', leetcodeLink: lc('string-to-integer-atoi'), gfgLink: gfg('implement-atoi') },
          { id: 'str13', name: 'Count Number of Substrings', difficulty: 'Medium', gfgLink: gfg('count-number-of-substrings4528') },
          { id: 'str14', name: 'Longest Palindromic Substring', difficulty: 'Medium', leetcodeLink: lc('longest-palindromic-substring'), gfgLink: gfg('longest-palindrome-in-a-string3411') },
          { id: 'str15', name: 'Sum of Beauty of All Substrings', difficulty: 'Medium', leetcodeLink: lc('sum-of-beauty-of-all-substrings') },
        ],
      },
    ],
  },
  {
    title: 'Learn LinkedList [Single LL, Double LL, Medium, Hard Problems]',
    subSections: [
      {
        title: '1D LinkedList',
        problems: [
          { id: 'll1', name: 'Introduction to LinkedList', difficulty: 'Easy', articleLink: tuf('introduction-to-linkedlist') },
          { id: 'll2', name: 'Inserting a Node in LinkedList', difficulty: 'Easy', articleLink: tuf('inserting-node-in-linkedlist') },
          { id: 'll3', name: 'Deleting a Node in LinkedList', difficulty: 'Easy', articleLink: tuf('deleting-node-in-linkedlist'), leetcodeLink: lc('delete-node-in-a-linked-list') },
          { id: 'll4', name: 'Find the Length of a LinkedList', difficulty: 'Easy', articleLink: tuf('length-of-linkedlist'), gfgLink: gfg('count-nodes-of-linked-list') },
          { id: 'll5', name: 'Search in a LinkedList', difficulty: 'Easy', articleLink: tuf('search-in-linkedlist'), gfgLink: gfg('search-in-linked-list-1664434326') },
        ],
      },
      {
        title: 'Doubly LinkedList',
        problems: [
          { id: 'dll1', name: 'Introduction to Doubly LinkedList', difficulty: 'Easy', articleLink: tuf('intro-doubly-linkedlist') },
          { id: 'dll2', name: 'Insert Node in Doubly LinkedList', difficulty: 'Easy', articleLink: tuf('insert-doubly-linkedlist') },
          { id: 'dll3', name: 'Delete Node in Doubly LinkedList', difficulty: 'Easy', articleLink: tuf('delete-doubly-linkedlist'), leetcodeLink: lc('delete-the-middle-node-of-a-linked-list') },
          { id: 'dll4', name: 'Reverse a Doubly LinkedList', difficulty: 'Easy', articleLink: tuf('reverse-doubly-linkedlist'), gfgLink: gfg('reverse-a-doubly-linked-list') },
        ],
      },
      {
        title: 'Medium Problems of LL',
        problems: [
          { id: 'llm1', name: 'Middle of a LinkedList', difficulty: 'Easy', leetcodeLink: lc('middle-of-the-linked-list'), gfgLink: gfg('finding-middle-element-in-a-linked-list') },
          { id: 'llm2', name: 'Reverse a LinkedList (Iterative)', difficulty: 'Easy', leetcodeLink: lc('reverse-linked-list'), gfgLink: gfg('reverse-a-linked-list') },
          { id: 'llm3', name: 'Reverse a LinkedList (Recursive)', difficulty: 'Easy', leetcodeLink: lc('reverse-linked-list') },
          { id: 'llm4', name: 'Detect a Loop in LinkedList', difficulty: 'Easy', leetcodeLink: lc('linked-list-cycle'), gfgLink: gfg('detect-loop-in-linked-list') },
          { id: 'llm5', name: 'Find the Starting Point of Loop', difficulty: 'Medium', leetcodeLink: lc('linked-list-cycle-ii'), gfgLink: gfg('find-the-first-node-of-loop-in-linked-list') },
          { id: 'llm6', name: 'Length of Loop in LinkedList', difficulty: 'Easy', gfgLink: gfg('find-length-of-loop') },
          { id: 'llm7', name: 'Check if LinkedList is Palindrome', difficulty: 'Medium', leetcodeLink: lc('palindrome-linked-list'), gfgLink: gfg('check-if-linked-list-is-pallindrome') },
          { id: 'llm8', name: 'Segregate Odd-Even Nodes', difficulty: 'Medium', leetcodeLink: lc('odd-even-linked-list') },
          { id: 'llm9', name: 'Remove Nth Node from End', difficulty: 'Medium', leetcodeLink: lc('remove-nth-node-from-end-of-list') },
          { id: 'llm10', name: 'Delete the Middle Node', difficulty: 'Medium', leetcodeLink: lc('delete-the-middle-node-of-a-linked-list') },
          { id: 'llm11', name: 'Sort LinkedList', difficulty: 'Medium', leetcodeLink: lc('sort-list'), gfgLink: gfg('sort-a-linked-list') },
          { id: 'llm12', name: 'Sort a LL of 0s, 1s and 2s', difficulty: 'Medium', gfgLink: gfg('given-a-linked-list-of-0s-1s-and-2s-sort-it') },
          { id: 'llm13', name: 'Find Intersection of Two LLs', difficulty: 'Medium', leetcodeLink: lc('intersection-of-two-linked-lists') },
          { id: 'llm14', name: 'Add 1 to a LL Number', difficulty: 'Medium', gfgLink: gfg('add-1-to-a-number-represented-as-linked-list') },
          { id: 'llm15', name: 'Add Two Numbers in LL', difficulty: 'Medium', leetcodeLink: lc('add-two-numbers'), gfgLink: gfg('add-two-numbers-represented-by-linked-lists') },
        ],
      },
      {
        title: 'Hard Problems of LL',
        problems: [
          { id: 'llh1', name: 'Reverse LL in Groups of K', difficulty: 'Hard', leetcodeLink: lc('reverse-nodes-in-k-group'), gfgLink: gfg('reverse-a-linked-list-in-groups-of-given-size') },
          { id: 'llh2', name: 'Rotate a LinkedList', difficulty: 'Medium', leetcodeLink: lc('rotate-list'), gfgLink: gfg('rotate-a-linked-list') },
          { id: 'llh3', name: 'Flattening a LinkedList', difficulty: 'Medium', gfgLink: gfg('flattening-a-linked-list') },
          { id: 'llh4', name: 'Clone a LinkedList with Random Pointer', difficulty: 'Hard', leetcodeLink: lc('copy-list-with-random-pointer') },
          { id: 'llh5', name: 'Design Browser History', difficulty: 'Medium', leetcodeLink: lc('design-browser-history') },
          { id: 'llh6', name: 'Merge Two Sorted LLs', difficulty: 'Easy', leetcodeLink: lc('merge-two-sorted-lists'), gfgLink: gfg('merge-two-sorted-linked-lists') },
          { id: 'llh7', name: 'Merge K Sorted LLs', difficulty: 'Hard', leetcodeLink: lc('merge-k-sorted-lists'), gfgLink: gfg('merge-k-sorted-linked-lists') },
        ],
      },
    ],
  },
  {
    title: 'Recursion [PatternWise]',
    subSections: [
      {
        title: 'Get a Strong Hold',
        problems: [
          { id: 'rec1', name: 'Recursive Implementation of atoi()', difficulty: 'Medium', gfgLink: gfg('implement-atoi') },
          { id: 'rec2', name: 'Pow(x, n)', difficulty: 'Medium', leetcodeLink: lc('powx-n'), gfgLink: gfg('power-of-numbers-1587115620') },
          { id: 'rec3', name: 'Count Good Numbers', difficulty: 'Medium', leetcodeLink: lc('count-good-numbers') },
          { id: 'rec4', name: 'Sort a Stack using Recursion', difficulty: 'Medium', gfgLink: gfg('sort-a-stack') },
          { id: 'rec5', name: 'Reverse a Stack using Recursion', difficulty: 'Medium', gfgLink: gfg('reverse-a-stack') },
        ],
      },
      {
        title: 'Subsequences Pattern',
        problems: [
          { id: 'rec6', name: 'Generate All Binary Strings', difficulty: 'Medium', leetcodeLink: lc('generate-binary-strings-without-adjacent-zeros') },
          { id: 'rec7', name: 'Generate Parentheses', difficulty: 'Medium', leetcodeLink: lc('generate-parentheses') },
          { id: 'rec8', name: 'Print All Subsequences / Power Set', difficulty: 'Medium', leetcodeLink: lc('subsets'), gfgLink: gfg('power-set4302') },
          { id: 'rec9', name: 'Count Subsequences with Sum K', difficulty: 'Medium', articleLink: tuf('count-subsequences-with-sum-k') },
          { id: 'rec10', name: 'Check if Subsequence Sum K Exists', difficulty: 'Medium', articleLink: tuf('check-subsequence-sum-k') },
          { id: 'rec11', name: 'Combination Sum', difficulty: 'Medium', leetcodeLink: lc('combination-sum'), gfgLink: gfg('combination-sum-1587115620') },
          { id: 'rec12', name: 'Combination Sum II', difficulty: 'Medium', leetcodeLink: lc('combination-sum-ii') },
          { id: 'rec13', name: 'Subset Sum I', difficulty: 'Medium', gfgLink: gfg('subset-sums2234') },
          { id: 'rec14', name: 'Subset Sum II', difficulty: 'Medium', leetcodeLink: lc('subsets-ii') },
          { id: 'rec15', name: 'Letter Combinations of a Phone Number', difficulty: 'Medium', leetcodeLink: lc('letter-combinations-of-a-phone-number') },
        ],
      },
      {
        title: 'Trying out all Combos / Hard',
        problems: [
          { id: 'rec16', name: 'Palindrome Partitioning', difficulty: 'Hard', leetcodeLink: lc('palindrome-partitioning') },
          { id: 'rec17', name: 'Word Search', difficulty: 'Medium', leetcodeLink: lc('word-search'), gfgLink: gfg('word-search') },
          { id: 'rec18', name: 'N-Queens', difficulty: 'Hard', leetcodeLink: lc('n-queens'), gfgLink: gfg('n-queen-problem0315') },
          { id: 'rec19', name: 'Rat in a Maze', difficulty: 'Medium', gfgLink: gfg('rat-in-a-maze-problem') },
          { id: 'rec20', name: 'Word Break', difficulty: 'Medium', leetcodeLink: lc('word-break') },
          { id: 'rec21', name: 'M Coloring Problem', difficulty: 'Medium', gfgLink: gfg('m-coloring-problem-1587115620') },
          { id: 'rec22', name: 'Sudoku Solver', difficulty: 'Hard', leetcodeLink: lc('sudoku-solver'), gfgLink: gfg('solve-the-sudoku-1587115621') },
          { id: 'rec23', name: 'Expression Add Operators', difficulty: 'Hard', leetcodeLink: lc('expression-add-operators') },
          { id: 'rec24', name: 'Permutations', difficulty: 'Medium', leetcodeLink: lc('permutations'), gfgLink: gfg('permutations-of-a-given-string2041') },
          { id: 'rec25', name: 'Permutations II', difficulty: 'Medium', leetcodeLink: lc('permutations-ii') },
        ],
      },
    ],
  },
];
