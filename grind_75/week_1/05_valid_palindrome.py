"""
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.
Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
"""


class Solution:
    def isPalindrome1(self, s: str) -> bool:
        valid = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D',
                 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
        s = s.lower()
        for i in range(len(s)):
            if s[i] in valid:
                if not s[i] == s[-i]:
                    return False
        # remove non-alphanumeric: regex
        # reverse: python
        # compare: ==
        return True

    def isPalindrome2(self, s: str) -> bool:
        newStr = ""
        for c in s:
            if c.isalnum():
                newStr += c.lower()
        return newStr == newStr[::-1]

    def alphaNum(self, c) -> bool:
        return (ord('A') <= ord(c) <= ord('Z') or
                ord('a') <= ord(c) <= ord('z') or
                ord('0') <= ord(c) <= ord('9'))

    def isPalindrome(self, s: str) -> bool:
        left = 0  # start of string
        right = len(s) - 1  # end of string

        while left < right:
            while left < right and not self.alphaNum(s[left]):
                left += 1
            while right > left and not self.alphaNum(s[right]):
                right -= 1
            if s[left].lower() != s[right].lower():
                return False
            left += 1
            right -= 1

        return True


input_1 = "A man, a plan, a canal: Panama"
output_1 = True

input_2 = "race a car"
output_2 = False

input_3 = " "
output_3 = True


# Test Solution
soln = Solution()
soln.isPalindrome(input_1)
assert soln.isPalindrome(input_1) == output_1
assert soln.isPalindrome(input_2) == output_2
assert soln.isPalindrome(input_3) == output_3
