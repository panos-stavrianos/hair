class DiscountsDatatable < Effective::Datatable
  datatable do
    length 10
    order :name, :desc
    col(:name, label: 'Όνομα') { |record| record.name }
    col(:per_cent, label: 'Επί τοις εκατό') { |record| record.per_cent }
    col(:active, label: 'Ενεργός', sort: false, search: false) do |record|
      record.enabled ? icon = 'check' : icon = 'slash'
      icon_to(icon, toggle_enabled_discount_path(record), {title: 'Toggle', method: :patch})
    end
    val(:edit, label: 'Ενημέρωση', sort: false, search: false) do |record|
      edit_icon_to(edit_discount_path(record))
    end
    val(:delete, label: 'Διαγραφή', sort: false, search: false) do |record|
      destroy_icon_to(discount_path(record), {method: :delete})
    end
  end

  collection do
    Discount.by_user_no_order(current_user)
  end

end