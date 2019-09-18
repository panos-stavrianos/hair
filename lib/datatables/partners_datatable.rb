class PartnersDatatable < Effective::Datatable
  datatable do
    length 10
    order :name, :desc
    col(:name, label: 'Όνομα') { |record| record.name }
    col(:phone, label: 'Τηλέφωνο') { |record| record.phone }
    col(:comment, label: 'Σχόλιο') { |record| record.comment }
    col(:active, label: 'Ενεργός', sort: false, search: false) do |record|
      record.enabled ? icon = 'check' : icon = 'slash'
      icon_to(icon, toggle_enabled_partner_path(record), {title: 'Toggle', method: :patch})
    end
    val(:edit, label: 'Ενημέρωση', sort: false, search: false) do |record|
      edit_icon_to(edit_partner_path(record))
    end
    val(:delete, label: 'Διαγραφή', sort: false, search: false) do |record|
      destroy_icon_to(partner_path(record), {method: :delete})
    end

  end

  collection do
    Partner.by_user_no_order(current_user)
  end

end