The running time of an algorithm is how long it takes.

O: big-o-notation: used to describe the running time of algorithms

Biggest amount time it will take to complete task

O: upper bound

- `O(n^2)`slowest
- `O(nlogn)`
- `O(n)`
- `O(logn)`
- `O(1)`: constant number of steps (best case)

Ω: lower bound

- `Ω(n^2)`
- `Ω(nlogn)`
- `Ω(n)`
- `Ω(logn)`
- `Ω(1)`

Linear search:

- O(n): upper bound
- Ω(1): lower bound

Binary search: if sorted

- O(logn): upper bound
- Ω(1): lower bound

```fish
if number behind middle door
  return true
else if number < middle door
  search left half
else if number > middle door
  search right half
else
  return false
```
