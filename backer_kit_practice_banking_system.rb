class Account
  attr_accessor :balance, :account_number

  def initialize(account_number)
    @account_number = account_number
    @balance = 0
  end

  def deposit(amount)
    @balance += amount
  end

  def withdraw(amount)
    @balance -= amount
  end
end

class Transaction
  def initialize(sender, receiver, amount)
    @sender = sender
    @receiver = receiver
    @amount = amount
  end

  def execute
    if @sender.balance >= @amount
      @sender.withdraw(@amount)
      @receiver.deposit(@amount)
      "Transaction successful"
    else
      "Transaction failed: Insufficient funds"
    end
  end
end

# Demonstrate the basic banking system
account1 = Account.new("A123")
account2 = Account.new("B456")

transaction = Transaction.new(account1, account2, 100)
puts transaction.execute # "Transaction successful"
puts account1.balance  # 0
puts account2.balance  # 100
