class CustomersDatatable < Effective::Datatable
  datatable do
    length 10
    order :name, :desc
    col(:name, label: 'Όνομα') do |record|
      link_to record.name, record
    end
    col(:sex, label: 'Φύλο') { |record| record.sex_to_s }
    col(:phone_1, label: 'Τηλέφωνο 1') { |record| record.phone_1 }
    col(:phone_2, label: 'Τηλέφωνο 2') { |record| record.phone_2 }
    col(:comment, label: 'Σχόλιο') { |record| record.comment }
    val(:edit, label: 'Ενημέρωση', sort: false, search: false) do |record|
      edit_icon_to(edit_customer_path(record))
    end
    val(:delete, label: 'Διαγραφή', sort: false, search: false) do |record|
      destroy_icon_to(customers_path(record), {method: :delete})
    end
  end

  collection do
    Customer.by_user_no_order(current_user)
  end

end