def findSmallest(arr):
    smallest = arr[0]
    smallest_index = 0
    for i in range(1, len(arr)):
        if arr[i] < smallest:
            smallest = arr[i]
            smallest_index = i
    return smallest_index  # return the index of the smallest


def selectionSort(arr):
    newArr = []
    for i in range(len(arr)):
        smallest = findSmallest(arr)  # smallest element
        newArr.append(arr.pop(smallest))  # move smallest to newArr
    return newArr


print(selectionSort([5, 3, 6, 2, 10]))
