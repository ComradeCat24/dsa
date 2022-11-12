/** link : https://leetcode.com/problems/maximum-depth-of-binary-tree/
 *	category : Tree
 *	difficulty : Normal
 *
 * * desc : Given the root1 of a binary tree, return its maximum depth.
 * *		A binary tree's maximum depth is the number of nodes along the
 * *		longest path from the root1 node down to the farthest leaf node.
 *
 * @input : [3,9,20,null,null,15,7]
 * @output : 3
 *
 * @input : [1,null,2]
 * @output : 2
 *
 * ?constraints:
 *		The number of nodes in the tree is in the range [0, 104].
 *		-100 <= Node.val <= 100
 *
 */

// Solution - Time O() | Space O()
const maximumDepthofBinaryTree = (root1) => {
	if (root1 === null) return 0;

	return (
		1 +
		Math.max(
			maximumDepthofBinaryTree(root1.left),
			maximumDepthofBinaryTree(root1.right)
		)
	);
};

// trial cases
function Node(value) {
	this.value = value;
	this.left = null;
	this.right = null;
}

// [3,9,20,null,null,15,7]
let root1 = new Node(3);
root1.left = new Node(9);
root1.right = new Node(20);
root1.left.left = new Node(null);
root1.left.right = new Node(null);
root1.right.left = new Node(15);
root1.right.right = new Node(7);

// [1, null, 2];
let root2 = new Node(1);
root2.left = new Node(null);
root2.right = new Node(2);

console.log(`
	input: 	root1: [${JSON.stringify(root1)}] 
	output: ${maximumDepthofBinaryTree(root1)}
`);

console.log(`
	input: 	root1: [${JSON.stringify(root2)}] 
	output: ${maximumDepthofBinaryTree(root2)}
`);

/** Workspace
 *[1] *
 *
 *				 3
 *			  ↙    ↘
 *			9		20
 *				  ↙    ↘
 *				15		7
 *
 *	[3, 9, 20, null, null, 15, 7]
 *
 * maximum number of nodes for a level n binary tree is 2^{n+1} - 1.
 *
 * the height is h = log2(n + 1), i.e. h is O(log n)
 *
 * the number of leaves is lh = (n + 1)/2, i.e. roughly half of the nodes are at the leaves.
 *
 *
 */
