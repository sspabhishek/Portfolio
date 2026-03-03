import { DSASection } from './dsa-types';

const lc = (slug: string) => `https://leetcode.com/problems/${slug}/`;
const gfg = (slug: string) => `https://www.geeksforgeeks.org/problems/${slug}/1`;
const cn = (slug: string) => `https://www.naukri.com/code360/problems/${slug}`;
const tuf = (slug: string) => `https://takeuforward.org/plus/dsa/problems/${slug}`;

export const dsaSections2: DSASection[] = [
  {
    title: 'Solve Problems on Arrays [Easy -> Medium -> Hard]',
    subSections: [
      {
        title: 'Easy',
        problems: [
          { id: 'ae1', name: 'Largest Element in an Array', difficulty: 'Easy', articleLink: tuf('largest-element-in-an-array'), gfgLink: gfg('largest-element-in-array4009') },
          { id: 'ae2', name: 'Second Largest Element', difficulty: 'Easy', articleLink: tuf('second-largest-element'), leetcodeLink: lc('largest-number-at-least-twice-of-others'), gfgLink: gfg('second-largest3735') },
          { id: 'ae3', name: 'Check if Array is Sorted', difficulty: 'Easy', articleLink: tuf('check-if-array-is-sorted'), leetcodeLink: lc('check-if-array-is-sorted-and-rotated'), gfgLink: gfg('check-if-an-array-is-sorted0701') },
          { id: 'ae4', name: 'Remove Duplicates from Sorted Array', difficulty: 'Easy', articleLink: tuf('remove-duplicates'), leetcodeLink: lc('remove-duplicates-from-sorted-array'), gfgLink: gfg('remove-duplicate-elements-from-sorted-array') },
          { id: 'ae5', name: 'Left Rotate Array by One Place', difficulty: 'Easy', articleLink: tuf('left-rotate-array-by-one'), gfgLink: gfg('cyclically-rotate-an-array-by-one2614') },
          { id: 'ae6', name: 'Left Rotate Array by D Places', difficulty: 'Easy', articleLink: tuf('left-rotate-array-by-d-places'), leetcodeLink: lc('rotate-array'), gfgLink: gfg('reversal-algorithm5340') },
          { id: 'ae7', name: 'Move Zeroes to End', difficulty: 'Easy', articleLink: tuf('move-zeroes-to-end'), leetcodeLink: lc('move-zeroes'), gfgLink: gfg('move-all-zeroes-to-end-of-array0751') },
          { id: 'ae8', name: 'Linear Search', difficulty: 'Easy', articleLink: tuf('linear-search'), gfgLink: gfg('search-a-number-in-an-array-1587115621') },
          { id: 'ae9', name: 'Find the Union', difficulty: 'Easy', articleLink: tuf('union-of-two-sorted-arrays'), leetcodeLink: lc('union-of-two-sorted-arrays'), gfgLink: gfg('union-of-two-sorted-arrays-1587115621') },
          { id: 'ae10', name: 'Find Missing Number', difficulty: 'Easy', articleLink: tuf('find-missing-number'), leetcodeLink: lc('missing-number'), gfgLink: gfg('missing-number-in-array1416') },
          { id: 'ae11', name: 'Maximum Consecutive Ones', difficulty: 'Easy', articleLink: tuf('maximum-consecutive-ones'), leetcodeLink: lc('max-consecutive-ones') },
          { id: 'ae12', name: 'Find the Number that Appears Once', difficulty: 'Easy', articleLink: tuf('find-the-single-element'), leetcodeLink: lc('single-number'), gfgLink: gfg('find-the-element-that-appears-once-in-sorted-array') },
          { id: 'ae13', name: 'Longest Subarray with Sum K (Positives)', difficulty: 'Easy', articleLink: tuf('longest-subarray-with-sum-k'), gfgLink: gfg('longest-sub-array-with-sum-k0809') },
          { id: 'ae14', name: 'Longest Subarray with Sum K (Pos & Neg)', difficulty: 'Medium', articleLink: tuf('longest-subarray-with-sum-k-negatives'), gfgLink: gfg('longest-sub-array-with-sum-k0809') },
        ],
      },
      {
        title: 'Medium',
        problems: [
          { id: 'am1', name: 'Two Sum', difficulty: 'Easy', articleLink: tuf('two-sum'), leetcodeLink: lc('two-sum'), gfgLink: gfg('key-pair5616') },
          { id: 'am2', name: 'Sort an Array of 0s, 1s and 2s', difficulty: 'Medium', articleLink: tuf('sort-an-array-of-0s-1s-and-2s'), leetcodeLink: lc('sort-colors'), gfgLink: gfg('sort-an-array-of-0s-1s-and-2s4231') },
          { id: 'am3', name: 'Majority Element (>n/2)', difficulty: 'Medium', articleLink: tuf('majority-element'), leetcodeLink: lc('majority-element'), gfgLink: gfg('majority-element-1587115620') },
          { id: 'am4', name: 'Kadane\'s Algorithm (Max Subarray Sum)', difficulty: 'Medium', articleLink: tuf('kadanes-algorithm'), leetcodeLink: lc('maximum-subarray'), gfgLink: gfg('kadanes-algorithm-1587115620') },
          { id: 'am5', name: 'Stock Buy and Sell', difficulty: 'Easy', articleLink: tuf('stock-buy-and-sell'), leetcodeLink: lc('best-time-to-buy-and-sell-stock'), gfgLink: gfg('stock-buy-and-sell-1587115621') },
          { id: 'am6', name: 'Rearrange Elements by Sign', difficulty: 'Medium', articleLink: tuf('rearrange-elements-by-sign'), leetcodeLink: lc('rearrange-array-elements-by-sign') },
          { id: 'am7', name: 'Next Permutation', difficulty: 'Medium', articleLink: tuf('next-permutation'), leetcodeLink: lc('next-permutation'), gfgLink: gfg('next-permutation5226') },
          { id: 'am8', name: 'Leaders in an Array', difficulty: 'Easy', articleLink: tuf('leaders-in-an-array'), gfgLink: gfg('leaders-in-an-array-1587115620') },
          { id: 'am9', name: 'Longest Consecutive Sequence', difficulty: 'Medium', articleLink: tuf('longest-consecutive-sequence'), leetcodeLink: lc('longest-consecutive-sequence'), gfgLink: gfg('longest-consecutive-subsequence2449') },
          { id: 'am10', name: 'Set Matrix Zeroes', difficulty: 'Medium', articleLink: tuf('set-matrix-zeroes'), leetcodeLink: lc('set-matrix-zeroes'), gfgLink: gfg('boolean-matrix-problem-1587115620') },
          { id: 'am11', name: 'Rotate Matrix by 90 degrees', difficulty: 'Medium', articleLink: tuf('rotate-image'), leetcodeLink: lc('rotate-image'), gfgLink: gfg('rotate-by-90-degree-1587115621') },
          { id: 'am12', name: 'Spiral Traversal of Matrix', difficulty: 'Medium', articleLink: tuf('spiral-matrix'), leetcodeLink: lc('spiral-matrix'), gfgLink: gfg('spirally-traversing-a-matrix-1587115621') },
          { id: 'am13', name: 'Subarray Sum Equals K', difficulty: 'Medium', articleLink: tuf('subarray-sum-equals-k'), leetcodeLink: lc('subarray-sum-equals-k') },
          { id: 'am14', name: 'Pascal\'s Triangle', difficulty: 'Easy', articleLink: tuf('pascals-triangle'), leetcodeLink: lc('pascals-triangle'), gfgLink: gfg('pascal-triangle0652') },
        ],
      },
      {
        title: 'Hard',
        problems: [
          { id: 'ah1', name: '3 Sum', difficulty: 'Medium', articleLink: tuf('3sum'), leetcodeLink: lc('3sum'), gfgLink: gfg('triplet-sum-in-array-1587115621') },
          { id: 'ah2', name: '4 Sum', difficulty: 'Medium', articleLink: tuf('4sum'), leetcodeLink: lc('4sum'), gfgLink: gfg('find-all-four-sum-numbers1702') },
          { id: 'ah3', name: 'Largest Subarray with 0 Sum', difficulty: 'Medium', articleLink: tuf('largest-subarray-with-0-sum'), gfgLink: gfg('largest-subarray-with-0-sum') },
          { id: 'ah4', name: 'Count Subarrays with XOR K', difficulty: 'Medium', articleLink: tuf('count-subarrays-with-xor-k') },
          { id: 'ah5', name: 'Merge Overlapping Subintervals', difficulty: 'Medium', articleLink: tuf('merge-intervals'), leetcodeLink: lc('merge-intervals'), gfgLink: gfg('overlapping-intervals') },
          { id: 'ah6', name: 'Merge Two Sorted Arrays Without Extra Space', difficulty: 'Hard', articleLink: tuf('merge-sorted-arrays-without-extra-space'), leetcodeLink: lc('merge-sorted-array'), gfgLink: gfg('merge-two-sorted-arrays-1587115620') },
          { id: 'ah7', name: 'Find the Repeating and Missing Number', difficulty: 'Medium', articleLink: tuf('find-missing-and-repeating'), gfgLink: gfg('find-missing-and-repeating2512') },
          { id: 'ah8', name: 'Count Inversions', difficulty: 'Hard', articleLink: tuf('count-inversions'), gfgLink: gfg('inversion-of-array-1587115620') },
          { id: 'ah9', name: 'Reverse Pairs', difficulty: 'Hard', articleLink: tuf('reverse-pairs'), leetcodeLink: lc('reverse-pairs'), gfgLink: gfg('count-reverse-pairs') },
          { id: 'ah10', name: 'Maximum Product Subarray', difficulty: 'Medium', articleLink: tuf('maximum-product-subarray'), leetcodeLink: lc('maximum-product-subarray'), gfgLink: gfg('maximum-product-subarray3604') },
          { id: 'ah11', name: 'Majority Element (>n/3)', difficulty: 'Medium', articleLink: tuf('majority-element-ii'), leetcodeLink: lc('majority-element-ii') },
          { id: 'ah12', name: 'Grid Unique Paths', difficulty: 'Medium', articleLink: tuf('grid-unique-paths'), leetcodeLink: lc('unique-paths'), gfgLink: gfg('number-of-unique-paths5339') },
        ],
      },
    ],
  },
  {
    title: 'Binary Search [1D, 2D Arrays, Search Space]',
    subSections: [
      {
        title: 'BS on 1D Arrays',
        problems: [
          { id: 'bs1', name: 'Binary Search to find X in Sorted Array', difficulty: 'Easy', articleLink: tuf('binary-search'), leetcodeLink: lc('binary-search'), gfgLink: gfg('binary-search-1587115620') },
          { id: 'bs2', name: 'Implement Lower Bound', difficulty: 'Easy', articleLink: tuf('lower-bound'), gfgLink: gfg('floor-in-a-sorted-array-1587115620') },
          { id: 'bs3', name: 'Implement Upper Bound', difficulty: 'Easy', articleLink: tuf('upper-bound'), gfgLink: gfg('ceil-the-floor2802') },
          { id: 'bs4', name: 'Search Insert Position', difficulty: 'Easy', articleLink: tuf('search-insert-position'), leetcodeLink: lc('search-insert-position') },
          { id: 'bs5', name: 'Floor/Ceil in Sorted Array', difficulty: 'Easy', articleLink: tuf('floor-ceil-sorted-array'), gfgLink: gfg('ceil-the-floor2802') },
          { id: 'bs6', name: 'First and Last Occurrence', difficulty: 'Medium', articleLink: tuf('first-and-last-position'), leetcodeLink: lc('find-first-and-last-position-of-element-in-sorted-array') },
          { id: 'bs7', name: 'Count Occurrences in Sorted Array', difficulty: 'Easy', articleLink: tuf('count-occurrences'), gfgLink: gfg('number-of-occurrence2259') },
          { id: 'bs8', name: 'Search in Rotated Sorted Array I', difficulty: 'Medium', articleLink: tuf('search-in-rotated-sorted-array'), leetcodeLink: lc('search-in-rotated-sorted-array') },
          { id: 'bs9', name: 'Search in Rotated Sorted Array II', difficulty: 'Medium', articleLink: tuf('search-in-rotated-sorted-array-ii'), leetcodeLink: lc('search-in-rotated-sorted-array-ii') },
          { id: 'bs10', name: 'Find Minimum in Rotated Sorted Array', difficulty: 'Medium', articleLink: tuf('minimum-in-rotated-sorted-array'), leetcodeLink: lc('find-minimum-in-rotated-sorted-array') },
          { id: 'bs11', name: 'Find out how many times Array has been Rotated', difficulty: 'Easy', articleLink: tuf('rotation-count'), gfgLink: gfg('rotation4723') },
          { id: 'bs12', name: 'Single Element in Sorted Array', difficulty: 'Medium', articleLink: tuf('single-element-in-sorted-array'), leetcodeLink: lc('single-element-in-a-sorted-array') },
          { id: 'bs13', name: 'Find Peak Element', difficulty: 'Medium', articleLink: tuf('find-peak-element'), leetcodeLink: lc('find-peak-element'), gfgLink: gfg('peak-element') },
        ],
      },
      {
        title: 'BS on Answers',
        problems: [
          { id: 'bsa1', name: 'Find Sqrt of a Number', difficulty: 'Easy', articleLink: tuf('find-sqrt'), leetcodeLink: lc('sqrtx'), gfgLink: gfg('square-root') },
          { id: 'bsa2', name: 'Find Nth Root of a Number', difficulty: 'Medium', articleLink: tuf('find-nth-root'), gfgLink: gfg('find-nth-root-of-m5843') },
          { id: 'bsa3', name: 'Koko Eating Bananas', difficulty: 'Medium', articleLink: tuf('koko-eating-bananas'), leetcodeLink: lc('koko-eating-bananas') },
          { id: 'bsa4', name: 'Minimum Days to Make M Bouquets', difficulty: 'Medium', articleLink: tuf('minimum-days-to-make-m-bouquets'), leetcodeLink: lc('minimum-number-of-days-to-make-m-bouquets') },
          { id: 'bsa5', name: 'Find the Smallest Divisor', difficulty: 'Medium', articleLink: tuf('smallest-divisor'), leetcodeLink: lc('find-the-smallest-divisor-given-a-threshold') },
          { id: 'bsa6', name: 'Capacity to Ship Packages within D Days', difficulty: 'Medium', articleLink: tuf('capacity-to-ship-packages'), leetcodeLink: lc('capacity-to-ship-packages-within-d-days') },
          { id: 'bsa7', name: 'Kth Missing Positive Number', difficulty: 'Easy', articleLink: tuf('kth-missing-positive-number'), leetcodeLink: lc('kth-missing-positive-number') },
          { id: 'bsa8', name: 'Aggressive Cows', difficulty: 'Medium', articleLink: tuf('aggressive-cows'), gfgLink: gfg('aggressive-cows') },
          { id: 'bsa9', name: 'Allocate Minimum Number of Pages', difficulty: 'Hard', articleLink: tuf('allocate-minimum-pages'), gfgLink: gfg('allocate-minimum-number-of-pages0937') },
          { id: 'bsa10', name: 'Split Array — Largest Sum', difficulty: 'Hard', articleLink: tuf('split-array-largest-sum'), leetcodeLink: lc('split-array-largest-sum') },
          { id: 'bsa11', name: 'Painter\'s Partition', difficulty: 'Hard', articleLink: tuf('painters-partition'), gfgLink: gfg('the-painters-partition-problem1702') },
          { id: 'bsa12', name: 'Minimize Max Distance to Gas Station', difficulty: 'Hard', articleLink: tuf('minimize-max-distance-to-gas-station'), gfgLink: gfg('minimize-max-distance-to-gas-station') },
          { id: 'bsa13', name: 'Median of Two Sorted Arrays', difficulty: 'Hard', articleLink: tuf('median-of-two-sorted-arrays'), leetcodeLink: lc('median-of-two-sorted-arrays') },
          { id: 'bsa14', name: 'Kth Element of Two Sorted Arrays', difficulty: 'Hard', articleLink: tuf('kth-element-of-two-sorted-arrays'), gfgLink: gfg('k-th-element-of-two-sorted-array1317') },
        ],
      },
      {
        title: 'BS on 2D Arrays',
        problems: [
          { id: 'bs2d1', name: 'Find the Row with Maximum Number of 1s', difficulty: 'Easy', articleLink: tuf('row-with-max-1s'), gfgLink: gfg('row-with-max-1s0023') },
          { id: 'bs2d2', name: 'Search in a 2D Matrix', difficulty: 'Medium', articleLink: tuf('search-2d-matrix'), leetcodeLink: lc('search-a-2d-matrix'), gfgLink: gfg('search-in-a-matrix17201720') },
          { id: 'bs2d3', name: 'Search in a Row-Column Sorted Matrix', difficulty: 'Medium', articleLink: tuf('search-row-column-sorted-matrix'), leetcodeLink: lc('search-a-2d-matrix-ii') },
          { id: 'bs2d4', name: 'Find Peak Element in 2D', difficulty: 'Hard', articleLink: tuf('find-peak-element-2d'), leetcodeLink: lc('find-a-peak-element-ii') },
          { id: 'bs2d5', name: 'Matrix Median', difficulty: 'Hard', articleLink: tuf('matrix-median'), gfgLink: gfg('median-in-a-row-wise-sorted-matrix1527') },
        ],
      },
    ],
  },
];
