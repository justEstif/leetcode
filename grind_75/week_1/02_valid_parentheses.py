"""
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
determine if the input string is valid.

An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Every close bracket has a corresponding open bracket of the same type.
"""


class Solution:

    def isValid2(self, s: str) -> bool:
        map = {}  # char: index

        for i, char in enumerate(s):
            if char in map:
                map[char].append(i)
            else:
                map[char] = [i]

        # check the length
        if not len(map.get('(', [])) == len(map.get(')', [])):
            return False
        if not len(map.get('[', [])) == len(map.get(']', [])):
            return False
        if not len(map.get('{', [])) == len(map.get('}', [])):
            return False

        # check the closing order
        if not all(i > (j for j in map.get('(', [])) for i in map.get(')', [])):
            return False
        if not all(i > (j for j in map.get('[', [])) for i in map.get(']', [])):
            return False
        if not all(i > (j for j in map.get('{', [])) for i in map.get('}', [])):
            return False

        return True

    def isValid1(self, s: str) -> bool:
        if not len(s) % 2 == 0:
            return False

        map = {
            "(": ")",
            "[": "]",
            "{": "}",
        }
        for i, char in enumerate(s):
            if not len(s) < i+1:
                continue
            if not map[char] == s[i+1]:
                return False
        return True

    def isValid(self, s: str) -> bool:
        stack = []
        map = {
            ")": "(",
            "]": "[",
            "}": "{"
        }
        for c in s:
            if c in map:
                if stack and stack[-1] == map[c]:
                    stack.pop()
                else:
                    return False
            else:
                stack.append(c)
        return True if not stack else False


soln = Solution()
soln.isValid("()")
soln.isValid("()[]{}()[]{}")
