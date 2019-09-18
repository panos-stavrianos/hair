class ServicesDatatable < Effective::Datatable
  datatable do
    length 10
    order :name, :desc
    col(:name, label: 'Όνομα') do |record|
      link_to record.name, record
    end
    col(:description, label: 'Περιγραφή') { |record| record.description }
    col(:price_in_euro, label: 'Τιμή') { |record| record.price_in_euro }
    col(:active, label: 'Ενεργός', sort: false, search: false) do |record|
      record.enabled ? icon = 'check' : icon = 'slash'
      icon_to(icon, toggle_enabled_service_path(record), {title: 'Toggle', method: :patch})
    end
    val(:edit, label: 'Ενημέρωση', sort: false, search: false) do |record|
      edit_icon_to(edit_service_path(record))
    end
    val(:delete, label: 'Διαγραφή', sort: false, search: false) do |record|
      destroy_icon_to(services_path(record), {method: :delete})
    end
  end

  collection do
    Service.by_user_no_order(current_user)
  end

end