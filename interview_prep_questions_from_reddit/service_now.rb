# A function that formats a number with commas after each thousand place, two decimal places, and proper rounding.

# @param {Interger} num
# @return {String}
def format_numbers(num)
  num_str = num.to_s
  integer_part, decimal_part = num_str.split('.')

  decimal_part ||= '00'
  formatted_integer_part = format_integer_part(integer_part)
  formatted_decimal_part = decimal_part.empty? ? '00' : decimal_part.to_i.round(2).to_s

  "#{formatted_integer_part}.#{formatted_decimal_part}"
end

def format_integer_part(integer_str)
  formatted_num = ''
  integer_str.reverse.each_char.with_index do |char, index|
    formatted_num.prepend(char)
    formatted_num.prepend(',') if (index + 1) % 3 == 0
  end
  formatted_num[0] == ',' ? formatted_num[1..-1] : formatted_num
end

# puts format_numbers('12345') # "12,345.00"
# puts format_numbers('12345.678') # "12,345.60"

# Implement a function to calculate the square root of a number without using 'sqrt' or helper methods.

require 'json'
data = '[
  { "name": "John", "age": 30 },
  { "name": "Alice", "age": 25 },
  { "name": "Bob", "age": 35 },
  { "name": "Emily", "age": 28 },
  { "name": "Michael", "age": 40 },
  { "name": "Sarah", "age": 22 },
  { "name": "David", "age": 32 },
  { "name": "Olivia", "age": 27 },
  { "name": "Daniel", "age": 31 },
  { "name": "Sophia", "age": 29 }
]
'

# Given a JSON array of objects with names and ages, write a function to output the name of the person with a given age or the closest age.
def get_closest_age(json_data, person)
  json_data = JSON.parse(json_data)

  closest_age_difference = nil
  closest_person = nil

  json_data.each do |el|
    return el if el['name'] == person['name']

    age_difference = (person['age'].to_i - el['age'].to_i).abs

    if closest_age_difference.nil? || age_difference < closest_age_difference
      closest_age_difference = age_difference
      closest_person = el
    end
  end

  closest_person
end

# Given a JSON array of objects with attributes like firstname, lastname, age, gender, and veteran status, create functions to sort them by last name, first name, veteran status, and gender.

# Sample JSON array of objects
people = [
  { 'firstname' => 'John', 'lastname' => 'Doe', 'age' => 30, 'gender' => 'Male', 'veteran' => true },
  { 'firstname' => 'Jane', 'lastname' => 'Smith', 'age' => 25, 'gender' => 'Female', 'veteran' => false },
  { 'firstname' => 'Alice', 'lastname' => 'Johnson', 'age' => 35, 'gender' => 'Female', 'veteran' => true }
  # Add more objects as needed
]

# Function to sort by last name
def sort_by_last_name(people_array)
  people_array.sort_by { |person| person['lastname'] }
end

# Function to sort by first name
def sort_by_first_name(people_array)
  people_array.sort_by { |person| person['firstname'] }
end

# Function to sort by veteran status, with additional tiebreakers
def sort_by_veteran_status(people_array)
  people_array.sort_by do |person|
    [
      person['veteran'] ? 0 : 1,      # Sort by veteran status (0 for veterans, 1 for non-veterans)
      person['lastname'],             # Sort by last name
      person['firstname'],            # Sort by first name
      person['age']                   # Sort by age
    ]
  end
end

# Function to sort by gender
def sort_by_gender(people_array)
  people_array.sort_by { |person| person['gender'] }
end

# puts sort_by_last_name(people)
# puts sort_by_first_name(people)
# puts sort_by_veteran_status(people)
# puts sort_by_gender(people)

# A function that calculates the number of prime numbers equal to or less than a given number N.
# Provide a real code that runs with the correct answer.

def prime_numbers_less_than(num)
  prime_numbers = []
  (2..num).each do |el|
    prime_numbers.push(el) if prime?(el)
  end
  prime_numbers
end

def prime?(num)
  return if num <= 1

  (2..Math.sqrt(num)).none? { |i| (num % i).zero? }
end

print prime_numbers_less_than(20) # Output: [2, 3, 5, 7, 11, 13, 17, 19]
