class CustomerProductsDatatable < Effective::Datatable
  datatable do
    length 10
    order :created_at, :desc
    col(:name_customer, label: 'Όνομα') do |record|
      link_to record.customer.name, record.customer
    end
    col(:description, label: 'Προϊόν') do |record|
      link_to record.product.to_s_name_description, record.product
    end
    col(:name_partner, label: 'Συνεργάτης') do |record|
      link_to record.partner.to_s, record.partner
    end
    col(:amount_price, label: 'Ποσότητα - Τιμή') do |record|
      div_with_tooltip(record.amount_price,
                       record.price_tooltip)
    end
    col(:discount, label: 'Έκπτωση') { |record| record.discount_to_s }
    col(:comment, label: 'Σχόλιο') { |record| record.comment }
    col(:created_at, label: 'Ημ/Ώρα') do |record|
      div_with_tooltip(record.created_at_s,
                       time_ago_in_words(record.created_at))
    end
    val(:edit, label: 'Ενημέρωση', sort: false, search: false) do |record|
      edit_icon_to(edit_customer_product_path(record))
    end
    val(:delete, sort: false, search: false) do |record|
      destroy_icon_to(destroy_customer_product_path(record))
    end
  end

  collection do
    CustomerProduct.eager_load(:customer, :product, :partner, :discount).by_user_no_order(current_user)
  end

end