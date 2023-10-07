# @param {Integer} n
# @return {Boolean}
def fibo_even_sum(n)
  prev = 1
  curr = 2
  even_sum = 0

  while curr <= n
    even_sum += curr if curr.even?
    tmp = prev + curr
    prev = curr
    curr = tmp
  end

  even_sum
end
