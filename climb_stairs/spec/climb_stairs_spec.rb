require './lib/climb_stairs'

# You are climbing a staircase. It takes `n` steps to reach the top
# Each time you can either climb `1` or `2` steps
# In how many distinct ways can you climb to the top

# How many combination of 1 and 2 can result in `n`?
# 1 + 1 + 1
# 1 + 2
# 2
# How can you make the number n using 1 and 2?
# Find the sum of those ways.
# To reach nth step, what could have been your previous steps? (Think about the step sizes)

describe Solution do
  it 'finds the number of distinct ways you can climb stairs' do
    got = Solution.new.climb_stairs(2)
    expected = 2
    expect(got).to eql(expected)
  end
  it 'finds the number of distinct ways you can climb stairs' do
    got = Solution.new.climb_stairs(3)
    expected = 3
    expect(got).to eql(expected)
  end
end
