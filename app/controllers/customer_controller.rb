class CustomerController < ApplicationController
  def index
    if (Customer.count == 0)
      Customer.create(name: "Maria")
      Customer.create(name: "Bob")
      Customer.create(name: "Antre")
    end
    @customers = Customer.all
  end
end
