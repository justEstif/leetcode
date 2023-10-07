require './lib/longest_palindrome'

describe Solution do
  subject { Solution.new }
  it 'returns the length of the longest palindrome' do
    got = subject.longest_palindrome('abccccdd')
    expected = 7

    expect(got).to eql(expected)
  end

  it 'returns the length of the longest palindrome' do
    got = subject.longest_palindrome('a')
    expected = 1

    expect(got).to eql(expected)
  end
end
