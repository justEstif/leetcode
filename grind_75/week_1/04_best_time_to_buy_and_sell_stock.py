"""
You are given an array prices where prices[i] is the price of a given stock on
the ith day.

prices = array of prices 
prices[i] = price of a given stock on the ith day

You want to maximize your profit by choosing a single day to buy one stock and
choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot
achieve any profit, return 0.

return the maximum profit you can achieve from this transaction
return 0 if you can't achieve any profile

Input: prices = [7,1,5,3,6,4] 
Output: 5 = prices[4] - prices[1] = 6 - 1 = 5 

Input: prices = [7,6,4,3,1] 
Output: 0 

"""


class Solution:
    def maxProfit1(self, prices: list[int]) -> int:
        prices = prices[::-1]
        profit = 0

        for i, price in enumerate(prices):
            prev_prices = prices[i:]
            for prev_price in prev_prices:
                profit = max(profit, price-prev_price)

        return profit

    def maxProfit(self, prices: list[int]) -> int:
        left = 0  # buy
        right = 1  # sell
        max_profit = 0

        while right < len(prices):
            if prices[left] < prices[right]:
                current_profit = prices[right] - prices[left]
                max_profit = max(max_profit, current_profit)
            else:
                left = right
            right += 1
        return max_profit


soln = Solution()

input_1 = [7, 1, 5, 3, 6, 4]
output_1 = 5

input_2 = [7, 6, 4, 3, 1]
output_2 = 0

assert soln.maxProfit(input_1) == output_1
assert soln.maxProfit(input_2) == output_2
