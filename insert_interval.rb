# @param {Integer[][]} intervals
# @param {Integer[]} new_interval
# @return {Integer[][]}
def insert(intervals, new_interval)
  res = []
  intervals.each_with_index do |interval, i|
    if new_interval[1] < interval[0]
      res << new_interval
      res += intervals[i..-1]
      return res
    elsif new_interval[0] > interval[1]
      res << interval
    else
      new_interval = [interval[0], [new_interval[1], interval[1]].max]
    end
  end
  res << new_interval
end


print insert([[1, 3], [6, 9]], [2, 5]) # [[1, 5], [6, 9]]
print insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8]) # [[1,2],[3,10],[12,16]]
