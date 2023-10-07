class Solution
  # @param {Integer} n
  # @return {Integer}
  def climb_stairs(n)
    one = 1
    two = 1
    (0...n - 1).each do
      temp = one
      one += two
      two = temp
    end
    one
  end
end
