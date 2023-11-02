class Node
  attr_accessor :data, :next_node

  def initialize(data, next_node = nil)
    @data = data
    @next_node = next_node
  end
end

class LinkedList
  def initialize(data = nil)
    if data.nil?
      @head = nil
      @tail = nil
    else
      @head = Node.new(data)
      @tail = @head
    end
  end

  def add(data)
    new_node = Node.new(data)
    if @tail.nil?
      @head = new_node
    else
      @tail.next_node = new_node
    end
    @tail = new_node
  end

  def remove()
    return nil if @head.nil

    if @head == @tail
      @head = nil
      @tail = nil
    else
      current_node = @head
      while current_node.next_node != @tail
        current_node = current_node.next_node
      end
      @tail = current_node
      current_node.next_node = nil
    end
  end
end
