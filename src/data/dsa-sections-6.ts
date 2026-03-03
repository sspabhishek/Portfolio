import { DSASection } from './dsa-types';

const lc = (slug: string) => `https://leetcode.com/problems/${slug}/`;
const gfg = (slug: string) => `https://www.geeksforgeeks.org/problems/${slug}/1`;
const tuf = (slug: string) => `https://takeuforward.org/plus/dsa/problems/${slug}`;

export const dsaSections6: DSASection[] = [
  {
    title: 'Binary Search Trees [Concept and Problems]',
    subSections: [
      {
        title: 'Concept and Problems',
        problems: [
          { id: 'bst1', name: 'Search in BST', difficulty: 'Easy', leetcodeLink: lc('search-in-a-binary-search-tree') },
          { id: 'bst2', name: 'Ceil in BST', difficulty: 'Medium', articleLink: tuf('ceil-in-bst'), gfgLink: gfg('implementing-ceil-in-bst') },
          { id: 'bst3', name: 'Floor in BST', difficulty: 'Medium', articleLink: tuf('floor-in-bst'), gfgLink: gfg('floor-in-bst') },
          { id: 'bst4', name: 'Insert a Node in BST', difficulty: 'Medium', leetcodeLink: lc('insert-into-a-binary-search-tree') },
          { id: 'bst5', name: 'Delete a Node in BST', difficulty: 'Medium', leetcodeLink: lc('delete-node-in-a-bst') },
          { id: 'bst6', name: 'Kth Smallest/Largest Element in BST', difficulty: 'Medium', leetcodeLink: lc('kth-smallest-element-in-a-bst') },
          { id: 'bst7', name: 'Check if a Tree is BST', difficulty: 'Medium', leetcodeLink: lc('validate-binary-search-tree') },
          { id: 'bst8', name: 'LCA in BST', difficulty: 'Medium', leetcodeLink: lc('lowest-common-ancestor-of-a-binary-search-tree') },
          { id: 'bst9', name: 'Construct BST from Preorder', difficulty: 'Medium', leetcodeLink: lc('construct-binary-search-tree-from-preorder-traversal') },
          { id: 'bst10', name: 'Inorder Successor in BST', difficulty: 'Medium', gfgLink: gfg('inorder-successor-in-bst') },
          { id: 'bst11', name: 'BST Iterator', difficulty: 'Medium', leetcodeLink: lc('binary-search-tree-iterator') },
          { id: 'bst12', name: 'Two Sum in BST', difficulty: 'Easy', leetcodeLink: lc('two-sum-iv-input-is-a-bst') },
          { id: 'bst13', name: 'Recover BST', difficulty: 'Medium', leetcodeLink: lc('recover-binary-search-tree') },
          { id: 'bst14', name: 'Largest BST in Binary Tree', difficulty: 'Hard', gfgLink: gfg('largest-bst') },
          { id: 'bst15', name: 'Merge Two BSTs', difficulty: 'Hard', gfgLink: gfg('merge-two-bst-s') },
          { id: 'bst16', name: 'Convert Sorted Array to BST', difficulty: 'Easy', leetcodeLink: lc('convert-sorted-array-to-binary-search-tree') },
        ],
      },
    ],
  },
  {
    title: 'Graphs [Concepts & Problems]',
    subSections: [
      {
        title: 'Learning',
        problems: [
          { id: 'g1', name: 'Graph Representation (Adjacency List/Matrix)', difficulty: 'Easy', articleLink: tuf('graph-representation') },
          { id: 'g2', name: 'BFS of Graph', difficulty: 'Easy', gfgLink: gfg('bfs-traversal-of-graph') },
          { id: 'g3', name: 'DFS of Graph', difficulty: 'Easy', gfgLink: gfg('depth-first-traversal-for-a-graph') },
          { id: 'g4', name: 'Number of Provinces', difficulty: 'Medium', leetcodeLink: lc('number-of-provinces'), gfgLink: gfg('number-of-provinces') },
          { id: 'g5', name: 'Connected Components', difficulty: 'Medium', articleLink: tuf('connected-components') },
          { id: 'g6', name: 'Rotten Oranges', difficulty: 'Medium', leetcodeLink: lc('rotting-oranges'), gfgLink: gfg('rotten-oranges2536') },
          { id: 'g7', name: 'Flood Fill', difficulty: 'Easy', leetcodeLink: lc('flood-fill') },
          { id: 'g8', name: 'Detect Cycle in Undirected Graph (BFS)', difficulty: 'Medium', gfgLink: gfg('detect-cycle-in-an-undirected-graph') },
          { id: 'g9', name: 'Detect Cycle in Undirected Graph (DFS)', difficulty: 'Medium', gfgLink: gfg('detect-cycle-in-an-undirected-graph') },
          { id: 'g10', name: '0/1 Matrix (Nearest Cell)', difficulty: 'Medium', leetcodeLink: lc('01-matrix') },
          { id: 'g11', name: 'Surrounded Regions', difficulty: 'Medium', leetcodeLink: lc('surrounded-regions') },
          { id: 'g12', name: 'Number of Enclaves', difficulty: 'Medium', leetcodeLink: lc('number-of-enclaves') },
          { id: 'g13', name: 'Word Ladder I', difficulty: 'Hard', leetcodeLink: lc('word-ladder') },
          { id: 'g14', name: 'Word Ladder II', difficulty: 'Hard', leetcodeLink: lc('word-ladder-ii') },
          { id: 'g15', name: 'Number of Distinct Islands', difficulty: 'Medium', gfgLink: gfg('number-of-distinct-islands') },
          { id: 'g16', name: 'Bipartite Graph (BFS)', difficulty: 'Medium', leetcodeLink: lc('is-graph-bipartite') },
          { id: 'g17', name: 'Detect Cycle in Directed Graph (DFS)', difficulty: 'Medium', gfgLink: gfg('detect-cycle-in-a-directed-graph') },
        ],
      },
      {
        title: 'Topological Sort & Problems',
        problems: [
          { id: 'g18', name: 'Topological Sort (DFS)', difficulty: 'Medium', gfgLink: gfg('topological-sort') },
          { id: 'g19', name: 'Kahn\'s Algorithm (BFS Topo Sort)', difficulty: 'Medium', gfgLink: gfg('topological-sort') },
          { id: 'g20', name: 'Cycle Detection in Directed Graph (Kahn\'s)', difficulty: 'Medium', gfgLink: gfg('detect-cycle-in-a-directed-graph') },
          { id: 'g21', name: 'Course Schedule I', difficulty: 'Medium', leetcodeLink: lc('course-schedule') },
          { id: 'g22', name: 'Course Schedule II', difficulty: 'Medium', leetcodeLink: lc('course-schedule-ii') },
          { id: 'g23', name: 'Find Eventual Safe States', difficulty: 'Medium', leetcodeLink: lc('find-eventual-safe-states') },
          { id: 'g24', name: 'Alien Dictionary', difficulty: 'Hard', gfgLink: gfg('alien-dictionary') },
        ],
      },
      {
        title: 'Shortest Path Algorithms',
        problems: [
          { id: 'g25', name: 'Shortest Path in UG with Unit Weights', difficulty: 'Medium', articleLink: tuf('shortest-path-undirected-unit') },
          { id: 'g26', name: 'Shortest Path in DAG', difficulty: 'Medium', gfgLink: gfg('shortest-path-in-undirected-graph') },
          { id: 'g27', name: 'Dijkstra\'s Algorithm', difficulty: 'Medium', gfgLink: gfg('implementing-dijkstra-set-1-adjacency-matrix') },
          { id: 'g28', name: 'Shortest Path in Binary Maze', difficulty: 'Medium', leetcodeLink: lc('shortest-path-in-binary-matrix') },
          { id: 'g29', name: 'Path with Minimum Effort', difficulty: 'Medium', leetcodeLink: lc('path-with-minimum-effort') },
          { id: 'g30', name: 'Cheapest Flights within K Stops', difficulty: 'Medium', leetcodeLink: lc('cheapest-flights-within-k-stops') },
          { id: 'g31', name: 'Network Delay Time', difficulty: 'Medium', leetcodeLink: lc('network-delay-time') },
          { id: 'g32', name: 'Number of Ways to Arrive at Destination', difficulty: 'Medium', leetcodeLink: lc('number-of-ways-to-arrive-at-destination') },
          { id: 'g33', name: 'Bellman-Ford Algorithm', difficulty: 'Medium', gfgLink: gfg('distance-from-the-source-bellman-ford-algorithm') },
          { id: 'g34', name: 'Floyd Warshall Algorithm', difficulty: 'Medium', gfgLink: gfg('implementing-floyd-warshall2042') },
          { id: 'g35', name: 'City with the Smallest Number of Neighbors at a Threshold', difficulty: 'Medium', leetcodeLink: lc('find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance') },
        ],
      },
      {
        title: 'MST / Disjoint Set',
        problems: [
          { id: 'g36', name: 'Minimum Spanning Tree (Prim\'s)', difficulty: 'Medium', gfgLink: gfg('minimum-spanning-tree') },
          { id: 'g37', name: 'Disjoint Set (Union-Find)', difficulty: 'Medium', articleLink: tuf('disjoint-set') },
          { id: 'g38', name: 'Kruskal\'s Algorithm', difficulty: 'Medium', gfgLink: gfg('minimum-spanning-tree') },
          { id: 'g39', name: 'Number of Operations to Make Network Connected', difficulty: 'Medium', leetcodeLink: lc('number-of-operations-to-make-network-connected') },
          { id: 'g40', name: 'Most Stones Removed with Same Row or Column', difficulty: 'Medium', leetcodeLink: lc('most-stones-removed-with-same-row-or-column') },
          { id: 'g41', name: 'Accounts Merge', difficulty: 'Medium', leetcodeLink: lc('accounts-merge') },
          { id: 'g42', name: 'Number of Islands II', difficulty: 'Hard', gfgLink: gfg('number-of-islands') },
          { id: 'g43', name: 'Making a Large Island', difficulty: 'Hard', leetcodeLink: lc('making-a-large-island') },
          { id: 'g44', name: 'Swim in Rising Water', difficulty: 'Hard', leetcodeLink: lc('swim-in-rising-water') },
        ],
      },
      {
        title: 'Other Algorithms',
        problems: [
          { id: 'g45', name: 'Bridges in Graph (Tarjan\'s)', difficulty: 'Hard', leetcodeLink: lc('critical-connections-in-a-network') },
          { id: 'g46', name: 'Articulation Points', difficulty: 'Hard', gfgLink: gfg('articulation-point-1') },
          { id: 'g47', name: 'Strongly Connected Components (Kosaraju\'s)', difficulty: 'Hard', gfgLink: gfg('strongly-connected-components-kosarajus-algo') },
          { id: 'g48', name: 'Euler Circuit and Path', difficulty: 'Hard', articleLink: tuf('euler-circuit') },
          { id: 'g49', name: 'Number of Islands', difficulty: 'Medium', leetcodeLink: lc('number-of-islands') },
          { id: 'g50', name: 'Pacific Atlantic Water Flow', difficulty: 'Medium', leetcodeLink: lc('pacific-atlantic-water-flow') },
          { id: 'g51', name: 'Clone Graph', difficulty: 'Medium', leetcodeLink: lc('clone-graph') },
          { id: 'g52', name: 'Graph Coloring', difficulty: 'Medium', gfgLink: gfg('m-coloring-problem-1587115620') },
          { id: 'g53', name: 'Redundant Connection', difficulty: 'Medium', leetcodeLink: lc('redundant-connection') },
        ],
      },
    ],
  },
];
