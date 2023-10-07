class LinkedListNode
  attr_accessor :value, :next

  def initialize(value)
    @value = value
    @next  = nil
  end
end

class Solution
  # @param {ListNode} head
  # @return {ListNode}
  def reverse_list(head)
    prev = nil
    curr = head

    while curr
      tmp = curr.next
      curr.next = prev
      prev = curr
      curr = tmp
    end
    prev
  end
end
