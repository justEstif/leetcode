import math


def simple_search(list, item):  # O(n)
    for i in range(len(list)):
        if list[i] == item:
            return i
    return None


def binary_search(list, item):  # O(logn)
    low = 0
    high = len(list) - 1

    while low <= high:
        mid = low + high
        guess = list[mid]
        if guess == item:
            return mid
        if guess > item:
            high = mid - 1
        else:
            low = mid + 1
    return None


my_list = [1, 3, 5, 7, 9]


print(binary_search(my_list, 3))
print(binary_search(my_list, -1))

print(math.ceil(math.log(len(my_list), 2)))  # worst
