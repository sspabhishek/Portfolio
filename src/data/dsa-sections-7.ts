import { DSASection } from './dsa-types';

const lc = (slug: string) => `https://leetcode.com/problems/${slug}/`;
const gfg = (slug: string) => `https://www.geeksforgeeks.org/problems/${slug}/1`;
const tuf = (slug: string) => `https://takeuforward.org/plus/dsa/problems/${slug}`;

export const dsaSections7: DSASection[] = [
  {
    title: 'Dynamic Programming [Patterns and Problems]',
    subSections: [
      {
        title: 'Introduction to DP',
        problems: [
          { id: 'dp1', name: 'Climbing Stairs', difficulty: 'Easy', leetcodeLink: lc('climbing-stairs'), gfgLink: gfg('count-ways-to-reach-the-nth-stair-1587115620') },
          { id: 'dp2', name: 'Frog Jump (DP on Stairs)', difficulty: 'Medium', gfgLink: gfg('geek-jump') },
          { id: 'dp3', name: 'Frog Jump with K Distances', difficulty: 'Medium', articleLink: tuf('frog-jump-k-distances') },
          { id: 'dp4', name: 'Maximum Sum of Non-Adjacent Elements', difficulty: 'Medium', leetcodeLink: lc('house-robber'), gfgLink: gfg('max-sum-without-adjacents') },
          { id: 'dp5', name: 'House Robber II', difficulty: 'Medium', leetcodeLink: lc('house-robber-ii') },
        ],
      },
      {
        title: 'DP on Grids',
        problems: [
          { id: 'dp6', name: 'Ninja\'s Training (2D DP)', difficulty: 'Medium', articleLink: tuf('ninjas-training') },
          { id: 'dp7', name: 'Grid Unique Paths', difficulty: 'Medium', leetcodeLink: lc('unique-paths'), gfgLink: gfg('number-of-unique-paths5339') },
          { id: 'dp8', name: 'Unique Paths II', difficulty: 'Medium', leetcodeLink: lc('unique-paths-ii') },
          { id: 'dp9', name: 'Minimum Path Sum', difficulty: 'Medium', leetcodeLink: lc('minimum-path-sum'), gfgLink: gfg('minimum-cost-path3833') },
          { id: 'dp10', name: 'Triangle (Minimum Path Sum)', difficulty: 'Medium', leetcodeLink: lc('triangle'), gfgLink: gfg('triangle-path-sum') },
          { id: 'dp11', name: 'Minimum Falling Path Sum', difficulty: 'Medium', leetcodeLink: lc('minimum-falling-path-sum') },
          { id: 'dp12', name: 'Cherry Pickup II', difficulty: 'Hard', leetcodeLink: lc('cherry-pickup-ii') },
        ],
      },
      {
        title: 'DP on Subsequences',
        problems: [
          { id: 'dp13', name: 'Subset Sum Equal to Target', difficulty: 'Medium', gfgLink: gfg('subset-sum-problem-1611555638') },
          { id: 'dp14', name: 'Partition Equal Subset Sum', difficulty: 'Medium', leetcodeLink: lc('partition-equal-subset-sum'), gfgLink: gfg('subset-sum-problem2014') },
          { id: 'dp15', name: 'Partition Set Into 2 Subsets with Min Abs Sum Diff', difficulty: 'Hard', articleLink: tuf('min-abs-sum-diff-partition') },
          { id: 'dp16', name: 'Count Subsets with Sum K', difficulty: 'Medium', articleLink: tuf('count-subsets-with-sum-k') },
          { id: 'dp17', name: 'Count Partitions with Given Difference', difficulty: 'Medium', articleLink: tuf('count-partitions-with-difference') },
          { id: 'dp18', name: '0/1 Knapsack', difficulty: 'Medium', gfgLink: gfg('0-1-knapsack-problem0945') },
          { id: 'dp19', name: 'Coin Change', difficulty: 'Medium', leetcodeLink: lc('coin-change'), gfgLink: gfg('coin-change2448') },
          { id: 'dp20', name: 'Target Sum', difficulty: 'Medium', leetcodeLink: lc('target-sum') },
          { id: 'dp21', name: 'Coin Change II', difficulty: 'Medium', leetcodeLink: lc('coin-change-ii'), gfgLink: gfg('coin-change2448') },
          { id: 'dp22', name: 'Unbounded Knapsack', difficulty: 'Medium', gfgLink: gfg('knapsack-with-duplicate-items4201') },
          { id: 'dp23', name: 'Rod Cutting', difficulty: 'Medium', gfgLink: gfg('rod-cutting0840') },
        ],
      },
      {
        title: 'DP on Strings',
        problems: [
          { id: 'dp24', name: 'Longest Common Subsequence', difficulty: 'Medium', leetcodeLink: lc('longest-common-subsequence'), gfgLink: gfg('longest-common-subsequence-1587115620') },
          { id: 'dp25', name: 'Print LCS', difficulty: 'Medium', articleLink: tuf('print-lcs') },
          { id: 'dp26', name: 'Longest Common Substring', difficulty: 'Medium', gfgLink: gfg('longest-common-substring1452') },
          { id: 'dp27', name: 'Longest Palindromic Subsequence', difficulty: 'Medium', leetcodeLink: lc('longest-palindromic-subsequence'), gfgLink: gfg('longest-palindromic-subsequence-1612') },
          { id: 'dp28', name: 'Minimum Insertions for Palindrome', difficulty: 'Hard', leetcodeLink: lc('minimum-insertion-steps-to-make-a-string-palindrome') },
          { id: 'dp29', name: 'Minimum Insertions/Deletions to Convert', difficulty: 'Medium', leetcodeLink: lc('delete-operation-for-two-strings') },
          { id: 'dp30', name: 'Shortest Common Supersequence', difficulty: 'Hard', leetcodeLink: lc('shortest-common-supersequence'), gfgLink: gfg('shortest-common-supersequence0322') },
          { id: 'dp31', name: 'Distinct Subsequences', difficulty: 'Hard', leetcodeLink: lc('distinct-subsequences') },
          { id: 'dp32', name: 'Edit Distance', difficulty: 'Medium', leetcodeLink: lc('edit-distance'), gfgLink: gfg('edit-distance3702') },
          { id: 'dp33', name: 'Wildcard Matching', difficulty: 'Hard', leetcodeLink: lc('wildcard-matching'), gfgLink: gfg('wildcard-pattern-matching') },
        ],
      },
      {
        title: 'DP on Stocks',
        problems: [
          { id: 'dp34', name: 'Best Time to Buy and Sell Stock', difficulty: 'Easy', leetcodeLink: lc('best-time-to-buy-and-sell-stock'), gfgLink: gfg('stock-buy-and-sell-1587115621') },
          { id: 'dp35', name: 'Buy and Sell Stock II', difficulty: 'Medium', leetcodeLink: lc('best-time-to-buy-and-sell-stock-ii'), gfgLink: gfg('stock-buy-and-sell2615') },
          { id: 'dp36', name: 'Buy and Sell Stock III', difficulty: 'Hard', leetcodeLink: lc('best-time-to-buy-and-sell-stock-iii') },
          { id: 'dp37', name: 'Buy and Sell Stock IV', difficulty: 'Hard', leetcodeLink: lc('best-time-to-buy-and-sell-stock-iv') },
          { id: 'dp38', name: 'Buy and Sell Stock with Cooldown', difficulty: 'Medium', leetcodeLink: lc('best-time-to-buy-and-sell-stock-with-cooldown') },
          { id: 'dp39', name: 'Buy and Sell Stock with Transaction Fee', difficulty: 'Medium', leetcodeLink: lc('best-time-to-buy-and-sell-stock-with-transaction-fee') },
        ],
      },
      {
        title: 'DP on LIS',
        problems: [
          { id: 'dp40', name: 'Longest Increasing Subsequence', difficulty: 'Medium', leetcodeLink: lc('longest-increasing-subsequence'), gfgLink: gfg('longest-increasing-subsequence-1587115620') },
          { id: 'dp41', name: 'Print Longest Increasing Subsequence', difficulty: 'Medium', articleLink: tuf('print-lis') },
          { id: 'dp42', name: 'Largest Divisible Subset', difficulty: 'Medium', leetcodeLink: lc('largest-divisible-subset') },
          { id: 'dp43', name: 'Longest String Chain', difficulty: 'Medium', leetcodeLink: lc('longest-string-chain') },
          { id: 'dp44', name: 'Longest Bitonic Subsequence', difficulty: 'Medium', gfgLink: gfg('longest-bitonic-subsequence0824') },
          { id: 'dp45', name: 'Number of LIS', difficulty: 'Medium', leetcodeLink: lc('number-of-longest-increasing-subsequence') },
        ],
      },
      {
        title: 'MCM DP / Partition DP',
        problems: [
          { id: 'dp46', name: 'Matrix Chain Multiplication', difficulty: 'Hard', gfgLink: gfg('matrix-chain-multiplication0303') },
          { id: 'dp47', name: 'Minimum Cost to Cut a Stick', difficulty: 'Hard', leetcodeLink: lc('minimum-cost-to-cut-a-stick') },
          { id: 'dp48', name: 'Burst Balloons', difficulty: 'Hard', leetcodeLink: lc('burst-balloons'), gfgLink: gfg('burst-balloons') },
          { id: 'dp49', name: 'Evaluate Boolean Expression to True', difficulty: 'Hard', gfgLink: gfg('boolean-parenthesization5610') },
          { id: 'dp50', name: 'Palindrome Partitioning II', difficulty: 'Hard', leetcodeLink: lc('palindrome-partitioning-ii'), gfgLink: gfg('palindromic-patitioning4845') },
          { id: 'dp51', name: 'Partition Array for Maximum Sum', difficulty: 'Medium', leetcodeLink: lc('partition-array-for-maximum-sum') },
        ],
      },
      {
        title: 'DP on Rectangles',
        problems: [
          { id: 'dp52', name: 'Maximal Rectangle', difficulty: 'Hard', leetcodeLink: lc('maximal-rectangle'), gfgLink: gfg('max-rectangle') },
          { id: 'dp53', name: 'Count Square Submatrices with All Ones', difficulty: 'Medium', leetcodeLink: lc('count-square-submatrices-with-all-ones') },
        ],
      },
      {
        title: 'DP on Bits',
        problems: [
          { id: 'dp54', name: 'Minimum Cost to Reach Destination in Grid', difficulty: 'Hard', leetcodeLink: lc('minimum-cost-to-make-at-least-one-valid-path-in-a-grid') },
          { id: 'dp55', name: 'Word Break', difficulty: 'Medium', leetcodeLink: lc('word-break'), gfgLink: gfg('word-break1352') },
          { id: 'dp56', name: 'Russian Doll Envelopes', difficulty: 'Hard', leetcodeLink: lc('russian-doll-envelopes') },
        ],
      },
    ],
  },
  {
    title: 'Tries',
    subSections: [
      {
        title: 'Theory and Problems',
        problems: [
          { id: 'tr1', name: 'Implement Trie (Prefix Tree)', difficulty: 'Medium', leetcodeLink: lc('implement-trie-prefix-tree'), gfgLink: gfg('trie-insert-and-search0651') },
          { id: 'tr2', name: 'Implement Trie II (Prefix Tree)', difficulty: 'Medium', articleLink: tuf('trie-ii') },
          { id: 'tr3', name: 'Longest Word With All Prefixes', difficulty: 'Medium', articleLink: tuf('longest-word-with-all-prefixes') },
          { id: 'tr4', name: 'Number of Distinct Substrings in a String', difficulty: 'Hard', articleLink: tuf('number-of-distinct-substrings') },
          { id: 'tr5', name: 'Bit Manipulation - Power Set', difficulty: 'Medium', articleLink: tuf('power-set-trie') },
          { id: 'tr6', name: 'Maximum XOR of Two Numbers in an Array', difficulty: 'Medium', leetcodeLink: lc('maximum-xor-of-two-numbers-in-an-array') },
          { id: 'tr7', name: 'Maximum XOR with an Element from Array', difficulty: 'Hard', leetcodeLink: lc('maximum-xor-with-an-element-from-array') },
        ],
      },
    ],
  },
  {
    title: 'Strings [Advanced]',
    subSections: [
      {
        title: 'Advanced String Problems',
        problems: [
          { id: 'sa1', name: 'Minimum Add to Make Parentheses Valid', difficulty: 'Medium', leetcodeLink: lc('minimum-add-to-make-parentheses-valid') },
          { id: 'sa2', name: 'Count and Say', difficulty: 'Medium', leetcodeLink: lc('count-and-say'), gfgLink: gfg('decode-the-pattern1138') },
          { id: 'sa3', name: 'Hashing in Strings (Rabin Karp)', difficulty: 'Hard', articleLink: tuf('rabin-karp') },
          { id: 'sa4', name: 'Z-Function', difficulty: 'Hard', articleLink: tuf('z-function') },
          { id: 'sa5', name: 'KMP Algorithm', difficulty: 'Hard', leetcodeLink: lc('find-the-index-of-the-first-occurrence-in-a-string'), gfgLink: gfg('search-pattern0205') },
          { id: 'sa6', name: 'Shortest Palindrome', difficulty: 'Hard', leetcodeLink: lc('shortest-palindrome') },
          { id: 'sa7', name: 'Longest Happy Prefix', difficulty: 'Hard', leetcodeLink: lc('longest-happy-prefix') },
          { id: 'sa8', name: 'Count Palindromic Subsequences', difficulty: 'Hard', leetcodeLink: lc('count-different-palindromic-subsequences'), gfgLink: gfg('count-palindromic-subsequences') },
          { id: 'sa9', name: 'Repeated String Match', difficulty: 'Medium', leetcodeLink: lc('repeated-string-match'), gfgLink: gfg('repeated-string-match') },
        ],
      },
    ],
  },
];
