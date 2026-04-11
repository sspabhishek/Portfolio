import { DSASection } from './dsa-types';

const lc = (slug: string) => `https://leetcode.com/problems/${slug}/`;
const gfg = (slug: string) => `https://www.geeksforgeeks.org/problems/${slug}/1`;
const tuf = (slug: string) => `https://takeuforward.org/plus/dsa/problems/${slug}`;

export const dsaSections4: DSASection[] = [
  {
    title: 'Bit Manipulation [Concepts & Problems]',
    subSections: [
      {
        title: 'Learn Bit Manipulation',
        problems: [
          { id: 'bit1', name: 'Introduction to Bit Manipulation', difficulty: 'Easy', articleLink: tuf('intro-to-bit-manipulation') },
          { id: 'bit2', name: 'Check if ith Bit is Set or Not', difficulty: 'Easy', articleLink: tuf('check-ith-bit') },
          { id: 'bit3', name: 'Check if a Number is Odd or Not', difficulty: 'Easy', articleLink: tuf('check-odd-or-even') },
          { id: 'bit4', name: 'Check if a Number is Power of 2', difficulty: 'Easy', leetcodeLink: lc('power-of-two'), gfgLink: gfg('power-of-2-1587115620') },
          { id: 'bit5', name: 'Count the Number of Set Bits', difficulty: 'Easy', leetcodeLink: lc('number-of-1-bits'), gfgLink: gfg('set-bits0143') },
          { id: 'bit6', name: 'Set/Unset the Rightmost Set Bit', difficulty: 'Easy', articleLink: tuf('set-unset-rightmost-bit') },
          { id: 'bit7', name: 'Swap Two Numbers', difficulty: 'Easy', articleLink: tuf('swap-two-numbers') },
          { id: 'bit8', name: 'Divide Two Integers Without Operators', difficulty: 'Medium', leetcodeLink: lc('divide-two-integers') },
        ],
      },
      {
        title: 'Interview Problems',
        problems: [
          { id: 'bit9', name: 'Count Number of Set Bits', difficulty: 'Easy', leetcodeLink: lc('counting-bits'), gfgLink: gfg('count-total-set-bits-1587115620') },
          { id: 'bit10', name: 'Power Set', difficulty: 'Medium', leetcodeLink: lc('subsets'), gfgLink: gfg('power-set4302') },
          { id: 'bit11', name: 'Single Number I', difficulty: 'Easy', leetcodeLink: lc('single-number'), gfgLink: gfg('find-the-element-that-appears-once-in-sorted-array') },
          { id: 'bit12', name: 'Single Number II', difficulty: 'Medium', leetcodeLink: lc('single-number-ii'), gfgLink: gfg('find-element-occuring-once-when-all-other-are-present-thrice') },
          { id: 'bit13', name: 'Single Number III', difficulty: 'Medium', leetcodeLink: lc('single-number-iii'), gfgLink: gfg('two-numbers-with-odd-occurrences5846') },
          { id: 'bit14', name: 'XOR of Numbers in a Range', difficulty: 'Medium', leetcodeLink: lc('xor-queries-of-a-subarray') },
          { id: 'bit15', name: 'Find Two Numbers with Odd Occurrences', difficulty: 'Medium', gfgLink: gfg('two-numbers-with-odd-occurrences5846') },
          { id: 'bit16', name: 'XOR of Numbers in a Given Range L to R', difficulty: 'Easy', articleLink: tuf('xor-l-to-r') },
        ],
      },
      {
        title: 'Advanced Maths',
        problems: [
          { id: 'bit17', name: 'Print Prime Factors of a Number', difficulty: 'Easy', gfgLink: gfg('prime-factors5052') },
          { id: 'bit18', name: 'All Divisors of a Number', difficulty: 'Easy', gfgLink: gfg('number-of-factors1435') },
        ],
      },
    ],
  },
  {
    title: 'Stack and Queues [Learning, Pre-In-Post-fix, Monotonic Stack, Implementation]',
    subSections: [
      {
        title: 'Learning',
        problems: [
          { id: 'sq1', name: 'Implement Stack using Arrays', difficulty: 'Easy', articleLink: tuf('stack-using-arrays') },
          { id: 'sq2', name: 'Implement Queue using Arrays', difficulty: 'Easy', articleLink: tuf('queue-using-arrays') },
          { id: 'sq3', name: 'Implement Stack using Queue', difficulty: 'Medium', leetcodeLink: lc('implement-stack-using-queues'), gfgLink: gfg('stack-using-two-queues') },
          { id: 'sq4', name: 'Implement Queue using Stack', difficulty: 'Medium', leetcodeLink: lc('implement-queue-using-stacks'), gfgLink: gfg('queue-using-stack') },
          { id: 'sq5', name: 'Implement Stack using LinkedList', difficulty: 'Easy', articleLink: tuf('stack-using-linkedlist') },
          { id: 'sq6', name: 'Implement Queue using LinkedList', difficulty: 'Easy', articleLink: tuf('queue-using-linkedlist') },
          { id: 'sq7', name: 'Check for Balanced Parentheses', difficulty: 'Easy', leetcodeLink: lc('valid-parentheses'), gfgLink: gfg('parenthesis-checker2744') },
          { id: 'sq8', name: 'Implement Min Stack', difficulty: 'Medium', leetcodeLink: lc('min-stack'), gfgLink: gfg('special-stack') },
        ],
      },
      {
        title: 'Prefix, Infix, Postfix Conversion',
        problems: [
          { id: 'sq9', name: 'Infix to Postfix', difficulty: 'Medium', gfgLink: gfg('infix-to-postfix-1587115620') },
          { id: 'sq10', name: 'Prefix to Infix', difficulty: 'Medium', gfgLink: gfg('prefix-to-infix-conversion') },
          { id: 'sq11', name: 'Prefix to Postfix', difficulty: 'Medium', gfgLink: gfg('prefix-to-postfix-conversion') },
          { id: 'sq12', name: 'Postfix to Prefix', difficulty: 'Medium', gfgLink: gfg('postfix-to-prefix-conversion') },
          { id: 'sq13', name: 'Postfix to Infix', difficulty: 'Medium', gfgLink: gfg('postfix-to-infix-conversion') },
          { id: 'sq14', name: 'Infix to Prefix', difficulty: 'Medium', articleLink: tuf('infix-to-prefix') },
        ],
      },
      {
        title: 'Monotonic Stack/Queue Problems',
        problems: [
          { id: 'sq15', name: 'Next Greater Element', difficulty: 'Medium', leetcodeLink: lc('next-greater-element-i'), gfgLink: gfg('next-larger-element-1587115620') },
          { id: 'sq16', name: 'Next Greater Element II (Circular)', difficulty: 'Medium', leetcodeLink: lc('next-greater-element-ii') },
          { id: 'sq17', name: 'Next Smaller Element', difficulty: 'Easy', articleLink: tuf('next-smaller-element') },
          { id: 'sq18', name: 'Number of NGEs to the Right', difficulty: 'Medium', gfgLink: gfg('number-of-nges-to-the-right') },
          { id: 'sq19', name: 'Trapping Rain Water', difficulty: 'Hard', leetcodeLink: lc('trapping-rain-water'), gfgLink: gfg('trapping-rain-water-1587115621') },
          { id: 'sq20', name: 'Sum of Subarray Minimums', difficulty: 'Medium', leetcodeLink: lc('sum-of-subarray-minimums') },
          { id: 'sq21', name: 'Asteroid Collision', difficulty: 'Medium', leetcodeLink: lc('asteroid-collision') },
          { id: 'sq22', name: 'Sum of Subarray Ranges', difficulty: 'Medium', leetcodeLink: lc('sum-of-subarray-ranges') },
          { id: 'sq23', name: 'Remove K Digits', difficulty: 'Medium', leetcodeLink: lc('remove-k-digits') },
          { id: 'sq24', name: 'Largest Rectangle in Histogram', difficulty: 'Hard', leetcodeLink: lc('largest-rectangle-in-histogram'), gfgLink: gfg('maximum-rectangular-area-in-a-histogram-1587115620') },
          { id: 'sq25', name: 'Maximal Rectangle', difficulty: 'Hard', leetcodeLink: lc('maximal-rectangle') },
        ],
      },
      {
        title: 'Implementation Problems',
        problems: [
          { id: 'sq26', name: 'Sliding Window Maximum', difficulty: 'Hard', leetcodeLink: lc('sliding-window-maximum'), gfgLink: gfg('maximum-of-all-subarrays-of-size-k3101') },
          { id: 'sq27', name: 'Stock Span Problem', difficulty: 'Medium', leetcodeLink: lc('online-stock-span'), gfgLink: gfg('stock-span-problem-1587115621') },
          { id: 'sq28', name: 'The Celebrity Problem', difficulty: 'Medium', gfgLink: gfg('the-celebrity-problem') },
          { id: 'sq29', name: 'LRU Cache', difficulty: 'Hard', leetcodeLink: lc('lru-cache'), gfgLink: gfg('lru-cache') },
          { id: 'sq30', name: 'LFU Cache', difficulty: 'Hard', leetcodeLink: lc('lfu-cache') },
        ],
      },
    ],
  },
  {
    title: 'Sliding Window & Two Pointer Combined Problems',
    subSections: [
      {
        title: 'Medium Problems',
        problems: [
          { id: 'sw1', name: 'Longest Substring Without Repeating Characters', difficulty: 'Medium', leetcodeLink: lc('longest-substring-without-repeating-characters'), gfgLink: gfg('length-of-the-longest-substring') },
          { id: 'sw2', name: 'Max Consecutive Ones III', difficulty: 'Medium', leetcodeLink: lc('max-consecutive-ones-iii') },
          { id: 'sw3', name: 'Fruit Into Baskets', difficulty: 'Medium', leetcodeLink: lc('fruit-into-baskets'), gfgLink: gfg('fruit-into-baskets-1663137462') },
          { id: 'sw4', name: 'Longest Repeating Character Replacement', difficulty: 'Medium', leetcodeLink: lc('longest-repeating-character-replacement') },
          { id: 'sw5', name: 'Binary Subarrays with Sum', difficulty: 'Medium', leetcodeLink: lc('binary-subarrays-with-sum') },
          { id: 'sw6', name: 'Count Nice Subarrays', difficulty: 'Medium', leetcodeLink: lc('count-number-of-nice-subarrays') },
          { id: 'sw7', name: 'Number of Substrings Containing All Three Characters', difficulty: 'Medium', leetcodeLink: lc('number-of-substrings-containing-all-three-characters') },
          { id: 'sw8', name: 'Maximum Points You Can Obtain from Cards', difficulty: 'Medium', leetcodeLink: lc('maximum-points-you-can-obtain-from-cards') },
        ],
      },
      {
        title: 'Hard Problems',
        problems: [
          { id: 'sw9', name: 'Longest Substring with At Most K Distinct Characters', difficulty: 'Hard', leetcodeLink: lc('longest-substring-with-at-most-k-distinct-characters') },
          { id: 'sw10', name: 'Subarray with K Different Integers', difficulty: 'Hard', leetcodeLink: lc('subarrays-with-k-different-integers') },
          { id: 'sw11', name: 'Minimum Window Substring', difficulty: 'Hard', leetcodeLink: lc('minimum-window-substring'), gfgLink: gfg('smallest-window-in-a-string-containing-all-the-characters-of-another-string-1587115621') },
          { id: 'sw12', name: 'Minimum Window Subsequence', difficulty: 'Hard', leetcodeLink: lc('minimum-window-subsequence') },
        ],
      },
    ],
  },
];
