def f_max(lst: list[int | float]) -> int | float:
    if lst == []:
        return None
    if len(lst) == 1:
        return lst[0]
    else:
        sub_max = f_max(lst[1:])
        return lst[0] if lst[0] >= sub_max else sub_max
    # 1. -1 >= max([2, -4])
    # 2. -1 >= 2 >= max([-4])
    # 3. -1 >= 2 >= -4 >= max([])
    # 4. -1 >= 2 >= -4 >= None
    # 5. -1 >= 2 >= -4
    # 6. -1 >= 2
    # 7. 2


print(f_max([-1, 2, -4]))
