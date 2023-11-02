Basic Ruby Concepts:

- [x] Explain the difference between a local variable and an instance variable
      in Ruby.
- [x] What is the purpose of the attr_accessor, attr_reader, and attr_writer
      methods in Ruby?

Data Structures:

- [x] Implement a stack data structure in Ruby.
- [x] Write a function to reverse an array in Ruby without using the reverse
      method.
- [x] Create a custom class for a singly linked list and implement methods to
      add and remove elements.

String Manipulation:

- [x] Write a function to check if a string is a palindrome.
- [x] Implement a function that counts the number of words in a given string.
- [x] Reverse a string in place without using additional data structures.

Object-Oriented Programming:

- [x] Create a class hierarchy with inheritance and demonstrate method
      overriding and super calls.
- [x] Implement a basic banking system with classes for accounts and
      transactions.

Error Handling:

- [x] Explain the purpose of the begin, rescue, and ensure blocks in Ruby.
  - begin-rescue: are like try-catch blocks in JS. They signify the stack the
    begin of an error handling block and how to rescue is. The ensure is called
    regardless of an exception or not
- [ ] Write a function that handles exceptions gracefully for a specific
      scenario.

```ruby
def division(a, b)
  begin
    result = a / b
      puts "Result: #{result}"
    rescue ZeroDivisionError => e
    puts "Error: Division by zero - #{e.message}"
  ensure
    puts "Done"
  end
end
```

Ruby Gems:

- [ ] Explain what Ruby Gems are and how you can use them in your projects.
- [ ] Install a popular Ruby Gem and demonstrate its usage in a simple script.

File Handling:

- [ ] Write Ruby code to read data from a text file and process it.
- [ ] Create a new text file and write data to it using Ruby.

Testing (RSpec):

- [ ] Explain the purpose of RSpec in Ruby testing.
- [ ] Write a simple RSpec test case for a Ruby function.

Algorithm and Data Structure Challenges:

- [ ] Solve common algorithmic challenges in Ruby, such as finding the maximum
      subarray, sorting algorithms, or implementing a data structure like a hash
      table.
