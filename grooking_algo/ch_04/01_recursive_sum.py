def f_sum(lyst: list[int]) -> int:
    # if empty list, return 0
    if lyst == []:  # base case
        return 0
    return lyst[0] + f_sum(lyst[1:])  # recursive case
    # 1. 1 + sum([2,3])
    # 2. 1 + 2 + sum([3])
    # 3. 1 + 2 + 3 + sum([])
    # 4. 1 + 2 + 3 + 0 = 6
    # 5. 1 + 2 + 3
    # 6. 1 + 5
    # 7. 6


print(f_sum([1, 2, 3]))
