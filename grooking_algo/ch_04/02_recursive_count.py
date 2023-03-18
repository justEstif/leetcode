def count(lyst) -> int:
    if lyst == []:
        return 0
    return 1 + count(lyst[1:])


print(count([1, 2, 3, 4]))
print(count([1, 3, 4]))
