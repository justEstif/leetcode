class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def invertTree(self, root):
        if not root:
            return None

        # swap the children
        tmp = root.left
        root.left = root.right
        root.right = tmp

        self.invertTree(root.left)
        self.invertTree(root.right)

        return root


input_1 = [4, 2, 7, 1, 3, 6, 9]
output_1 = [4, 7, 2, 9, 6, 3, 1]

input_2 = [2, 1, 3]
output_2 = [2, 3, 1]
