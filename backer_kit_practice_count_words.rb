# Function that counts the words in a string
# @param {String} str
# def count_words(str)
# str.split(" ").length
# end

def count_words(str)
  words = str.scan(/\b\w+\b/)
  words.length
end

sentence = "This is a sample sentence with eight words."
word_count = count_words(sentence)
puts "Word count: #{word_count}"  # This should output "Word count: 8"
