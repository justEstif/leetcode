class Stack
  def initialize
    @stack = []
  end

  # function to add item to stack
  def push(item)
    @stack.push(item)
  end

  # function to remove item from stack
  def pop
    @stack.pop
  end

  def peek
    @stack.last
  end

  def size
    @stack.size
  end
end
