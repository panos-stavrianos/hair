class ExpensesDatatable < Effective::Datatable
  datatable do
    length 10
    order :name, :desc
    col(:name, label: 'Λόγος') { |record| record.name }
    col(:price_in_euro, label: 'Τιμή') { |record| record.price_in_euro }
    col(:created_at, label: 'Ημ/Ώρα') do |record|
      div_with_tooltip(record.created_at_s,
                       time_ago_in_words(record.created_at))
    end
    val(:edit, label: 'Ενημέρωση', sort: false, search: false) do |record|
      edit_icon_to(edit_expense_path(record))
    end
    val(:delete, label: 'Διαγραφή', sort: false, search: false) do |record|
      destroy_icon_to(expense_path(record), {method: :delete})
    end
  end

  collection do
    Expense.by_user_no_order(current_user)
  end

end