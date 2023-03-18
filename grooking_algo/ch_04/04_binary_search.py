def binary_search(target: int, lst: list[int], start: int, end: int) -> int:
    # Check base case
    if end >= start:
        middle = (start + end) // 2
        middle_value = lst[middle]

        if target == middle_value:
            return middle
        elif target > middle_value:
            return binary_search(target, lst, start, middle - 1)
        else:
            return binary_search(target, lst, middle + 1, end)
    else:
        return -1


# Test array
lst = [2, 3, 4, 10, 40]
target = 10


# Function call
result = binary_search(target, lst, 0, len(lst) - 1)

if result != -1:
    print("Element is present at index", str(result))
else:
    print("Element is not present in array")
