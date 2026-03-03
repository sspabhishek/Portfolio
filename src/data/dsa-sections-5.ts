import { DSASection } from './dsa-types';

const lc = (slug: string) => `https://leetcode.com/problems/${slug}/`;
const gfg = (slug: string) => `https://www.geeksforgeeks.org/problems/${slug}/1`;
const tuf = (slug: string) => `https://takeuforward.org/plus/dsa/problems/${slug}`;

export const dsaSections5: DSASection[] = [
  {
    title: 'Heaps [Learning, Medium, Hard Problems]',
    subSections: [
      {
        title: 'Learning',
        problems: [
          { id: 'hp1', name: 'Introduction to Priority Queues using Binary Heaps', difficulty: 'Easy', articleLink: tuf('intro-priority-queue') },
          { id: 'hp2', name: 'Min Heap and Max Heap Implementation', difficulty: 'Easy', articleLink: tuf('min-max-heap') },
          { id: 'hp3', name: 'Check if Array represents Heap', difficulty: 'Easy', gfgLink: gfg('does-array-represent-heap4345') },
          { id: 'hp4', name: 'Convert Min Heap to Max Heap', difficulty: 'Easy', gfgLink: gfg('convert-min-heap-to-max-heap-1666723307') },
        ],
      },
      {
        title: 'Medium Problems',
        problems: [
          { id: 'hp5', name: 'Kth Largest Element', difficulty: 'Medium', leetcodeLink: lc('kth-largest-element-in-an-array') },
          { id: 'hp6', name: 'Kth Smallest Element', difficulty: 'Medium', gfgLink: gfg('kth-smallest-element5635') },
          { id: 'hp7', name: 'Sort K Sorted Array (Nearly Sorted)', difficulty: 'Medium', gfgLink: gfg('nearly-sorted-1587115620') },
          { id: 'hp8', name: 'K Closest Points to Origin', difficulty: 'Medium', leetcodeLink: lc('k-closest-points-to-origin') },
          { id: 'hp9', name: 'Top K Frequent Elements', difficulty: 'Medium', leetcodeLink: lc('top-k-frequent-elements') },
          { id: 'hp10', name: 'Frequency Sort', difficulty: 'Medium', leetcodeLink: lc('sort-characters-by-frequency') },
          { id: 'hp11', name: 'Kth Largest Element in a Stream', difficulty: 'Easy', leetcodeLink: lc('kth-largest-element-in-a-stream') },
        ],
      },
      {
        title: 'Hard Problems',
        problems: [
          { id: 'hp12', name: 'Merge K Sorted Lists', difficulty: 'Hard', leetcodeLink: lc('merge-k-sorted-lists') },
          { id: 'hp13', name: 'Task Scheduler', difficulty: 'Medium', leetcodeLink: lc('task-scheduler') },
          { id: 'hp14', name: 'Design Twitter', difficulty: 'Medium', leetcodeLink: lc('design-twitter') },
          { id: 'hp15', name: 'Find Median from Data Stream', difficulty: 'Hard', leetcodeLink: lc('find-median-from-data-stream') },
          { id: 'hp16', name: 'Hand of Straights', difficulty: 'Medium', leetcodeLink: lc('hand-of-straights') },
          { id: 'hp17', name: 'Maximum Sum Combinations', difficulty: 'Medium', gfgLink: gfg('maximum-sum-combination') },
        ],
      },
    ],
  },
  {
    title: 'Greedy Algorithms [Easy, Medium/Hard]',
    subSections: [
      {
        title: 'Easy Problems',
        problems: [
          { id: 'gr1', name: 'Assign Cookies', difficulty: 'Easy', leetcodeLink: lc('assign-cookies') },
          { id: 'gr2', name: 'Fractional Knapsack', difficulty: 'Medium', gfgLink: gfg('fractional-knapsack-1587115620') },
          { id: 'gr3', name: 'Greedy Algorithm to find Minimum Coins', difficulty: 'Easy', articleLink: tuf('minimum-coins') },
          { id: 'gr4', name: 'Lemonade Change', difficulty: 'Easy', leetcodeLink: lc('lemonade-change') },
          { id: 'gr5', name: 'Valid Parenthesis String', difficulty: 'Medium', leetcodeLink: lc('valid-parenthesis-string') },
        ],
      },
      {
        title: 'Medium/Hard Problems',
        problems: [
          { id: 'gr6', name: 'N Meetings in One Room', difficulty: 'Easy', gfgLink: gfg('n-meetings-in-one-room-1587115620') },
          { id: 'gr7', name: 'Jump Game', difficulty: 'Medium', leetcodeLink: lc('jump-game') },
          { id: 'gr8', name: 'Jump Game II', difficulty: 'Medium', leetcodeLink: lc('jump-game-ii') },
          { id: 'gr9', name: 'Minimum Platforms', difficulty: 'Medium', gfgLink: gfg('minimum-platforms-1587115620') },
          { id: 'gr10', name: 'Job Sequencing Problem', difficulty: 'Medium', gfgLink: gfg('job-sequencing-problem-1587115620') },
          { id: 'gr11', name: 'Candy', difficulty: 'Hard', leetcodeLink: lc('candy') },
          { id: 'gr12', name: 'Shortest Job First', difficulty: 'Easy', articleLink: tuf('shortest-job-first') },
          { id: 'gr13', name: 'Page Faults in LRU', difficulty: 'Medium', gfgLink: gfg('page-faults-in-lru5603') },
          { id: 'gr14', name: 'Insert Interval', difficulty: 'Medium', leetcodeLink: lc('insert-interval') },
          { id: 'gr15', name: 'Merge Intervals', difficulty: 'Medium', leetcodeLink: lc('merge-intervals') },
          { id: 'gr16', name: 'Non-overlapping Intervals', difficulty: 'Medium', leetcodeLink: lc('non-overlapping-intervals') },
        ],
      },
    ],
  },
  {
    title: 'Binary Trees [Traversals, Medium and Hard Problems]',
    subSections: [
      {
        title: 'Traversals',
        problems: [
          { id: 'bt1', name: 'Introduction to Trees', difficulty: 'Easy', articleLink: tuf('intro-to-trees') },
          { id: 'bt2', name: 'Binary Tree Representation', difficulty: 'Easy', articleLink: tuf('binary-tree-representation') },
          { id: 'bt3', name: 'Binary Tree Traversals (In/Pre/Post)', difficulty: 'Easy', articleLink: tuf('tree-traversals') },
          { id: 'bt4', name: 'Preorder Traversal', difficulty: 'Easy', leetcodeLink: lc('binary-tree-preorder-traversal') },
          { id: 'bt5', name: 'Inorder Traversal', difficulty: 'Easy', leetcodeLink: lc('binary-tree-inorder-traversal') },
          { id: 'bt6', name: 'Postorder Traversal', difficulty: 'Easy', leetcodeLink: lc('binary-tree-postorder-traversal') },
          { id: 'bt7', name: 'Level Order Traversal', difficulty: 'Medium', leetcodeLink: lc('binary-tree-level-order-traversal') },
          { id: 'bt8', name: 'Iterative Preorder', difficulty: 'Medium', leetcodeLink: lc('binary-tree-preorder-traversal') },
          { id: 'bt9', name: 'Iterative Inorder', difficulty: 'Medium', leetcodeLink: lc('binary-tree-inorder-traversal') },
          { id: 'bt10', name: 'Iterative Postorder (2 Stack)', difficulty: 'Medium', articleLink: tuf('iterative-postorder-2-stack') },
          { id: 'bt11', name: 'Iterative Postorder (1 Stack)', difficulty: 'Hard', articleLink: tuf('iterative-postorder-1-stack') },
          { id: 'bt12', name: 'All Traversals in One', difficulty: 'Medium', articleLink: tuf('all-traversals-in-one') },
        ],
      },
      {
        title: 'Medium Problems',
        problems: [
          { id: 'bt13', name: 'Height of Binary Tree', difficulty: 'Easy', leetcodeLink: lc('maximum-depth-of-binary-tree') },
          { id: 'bt14', name: 'Check if Balanced Binary Tree', difficulty: 'Easy', leetcodeLink: lc('balanced-binary-tree') },
          { id: 'bt15', name: 'Diameter of Binary Tree', difficulty: 'Easy', leetcodeLink: lc('diameter-of-binary-tree') },
          { id: 'bt16', name: 'Maximum Path Sum', difficulty: 'Hard', leetcodeLink: lc('binary-tree-maximum-path-sum') },
          { id: 'bt17', name: 'Same Tree', difficulty: 'Easy', leetcodeLink: lc('same-tree') },
          { id: 'bt18', name: 'Zig Zag Traversal', difficulty: 'Medium', leetcodeLink: lc('binary-tree-zigzag-level-order-traversal') },
          { id: 'bt19', name: 'Boundary Traversal', difficulty: 'Medium', gfgLink: gfg('boundary-traversal-of-binary-tree') },
          { id: 'bt20', name: 'Vertical Order Traversal', difficulty: 'Hard', leetcodeLink: lc('vertical-order-traversal-of-a-binary-tree') },
          { id: 'bt21', name: 'Top View of Binary Tree', difficulty: 'Medium', gfgLink: gfg('top-view-of-binary-tree') },
          { id: 'bt22', name: 'Bottom View of Binary Tree', difficulty: 'Medium', gfgLink: gfg('bottom-view-of-binary-tree') },
          { id: 'bt23', name: 'Right/Left Side View', difficulty: 'Medium', leetcodeLink: lc('binary-tree-right-side-view') },
          { id: 'bt24', name: 'Symmetric Binary Tree', difficulty: 'Easy', leetcodeLink: lc('symmetric-tree') },
        ],
      },
      {
        title: 'Hard Problems',
        problems: [
          { id: 'bt25', name: 'Root to Node Path', difficulty: 'Medium', articleLink: tuf('root-to-node-path') },
          { id: 'bt26', name: 'Lowest Common Ancestor', difficulty: 'Medium', leetcodeLink: lc('lowest-common-ancestor-of-a-binary-tree') },
          { id: 'bt27', name: 'Maximum Width of Binary Tree', difficulty: 'Medium', leetcodeLink: lc('maximum-width-of-binary-tree') },
          { id: 'bt28', name: 'Children Sum Property', difficulty: 'Medium', articleLink: tuf('children-sum-property') },
          { id: 'bt29', name: 'All Nodes at Distance K', difficulty: 'Medium', leetcodeLink: lc('all-nodes-distance-k-in-binary-tree') },
          { id: 'bt30', name: 'Minimum Time to Burn Binary Tree', difficulty: 'Hard', gfgLink: gfg('burning-tree') },
          { id: 'bt31', name: 'Count Nodes in Complete Binary Tree', difficulty: 'Medium', leetcodeLink: lc('count-complete-tree-nodes') },
          { id: 'bt32', name: 'Requirements for Unique Binary Tree', difficulty: 'Medium', articleLink: tuf('unique-binary-tree-requirements') },
          { id: 'bt33', name: 'Construct BT from Inorder & Preorder', difficulty: 'Medium', leetcodeLink: lc('construct-binary-tree-from-preorder-and-inorder-traversal') },
          { id: 'bt34', name: 'Construct BT from Inorder & Postorder', difficulty: 'Medium', leetcodeLink: lc('construct-binary-tree-from-inorder-and-postorder-traversal') },
          { id: 'bt35', name: 'Serialize and Deserialize BT', difficulty: 'Hard', leetcodeLink: lc('serialize-and-deserialize-binary-tree') },
          { id: 'bt36', name: 'Morris Preorder Traversal', difficulty: 'Medium', articleLink: tuf('morris-preorder') },
          { id: 'bt37', name: 'Morris Inorder Traversal', difficulty: 'Medium', articleLink: tuf('morris-inorder') },
          { id: 'bt38', name: 'Flatten Binary Tree to Linked List', difficulty: 'Medium', leetcodeLink: lc('flatten-binary-tree-to-linked-list') },
          { id: 'bt39', name: 'Count nodes in complete Binary Tree', difficulty: 'Medium', leetcodeLink: lc('count-complete-tree-nodes') },
        ],
      },
    ],
  },
];
