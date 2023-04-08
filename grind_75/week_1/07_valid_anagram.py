"""
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
typically using all the original letters exactly once.
"""


class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        lst = [0] * 127

        for c in s:
            lst[ord(c)] += 1
        for c in t:
            if lst[ord(c)] == 0:
                return False
            else:
                lst[ord(c)] -= 1

        return True


input_1 = ["anagram", "nagaram"]
output_1 = True

input_2 = ["rat", 'car']
output_2 = False

soln = Solution()

assert soln.isAnagram(*input_1) == output_1
assert soln.isAnagram(*input_2) == output_2
