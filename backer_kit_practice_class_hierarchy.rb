class Vehicle
  attr_accessor :make, :model

  def initialize(make, model)
    @make = make
    @model = model
  end

  def start_engine
    "Vehicle engine started."
  end
end

class Car < Vehicle
  def start_engine
    "Car engine started."
  end
end

class Motorcycle < Vehicle
  def start_engine
    "Motorcycle engine started."
  end
end

# Demonstrate method overriding and super calls
vehicle = Vehicle.new("Generic", "Model")
car = Car.new("Toyota", "Camry")
motorcycle = Motorcycle.new("Harley-Davidson", "Sportster")

puts vehicle.start_engine  # "Vehicle engine started."
puts car.start_engine      # "Car engine started."
puts motorcycle.start_engine  # "Motorcycle engine started."
