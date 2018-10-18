module ApplicationHelper

  def row(value, options = "")
    "<td #{options}>#{value}</td>".html_safe
  end

  def row_with_tooltip(value, tooltip, options = "")
    "<td data-toggle='tooltip' data-placement='top' title='#{tooltip}' #{options}>#{value}</td>".html_safe
  end

  def delete_row(record)
    row_link_with_icon('glyphicon glyphicon-trash text-danger', record, method: :delete, data: {confirm: 'Are you sure?'})
  end

  def edit_row(path, html_options = nil, &block)
    row_link_with_icon('glyphicon glyphicon-edit text-primary', path, html_options, &block)
  end

  def enabled_row(path, current_value, html_options = nil, &block)
    if current_value
      row_link_with_icon('glyphicon glyphicon-check text-success', path, method: :patch, &block)
    else
      row_link_with_icon('glyphicon glyphicon-unchecked text-warning', path, method: :patch, &block)

    end

  end

  def row_link_with_icon(icon_class = nil, options = nil, html_options = nil, &block)
    ('<td>' + link_to("#{icon(icon_class)}".html_safe, options, html_options, &block) + '</td>').html_safe
  end

  def icon(icon_class)
    "<span class='#{icon_class}'></span>"
  end

  def datepicker_input(form, field)
    form.form_group :terms do
      content_tag :div, class: 'input-group date', id: 'sasa' do
        (form.datetime_field_without_bootstrap(field, {class: 'form-control'})) +
            (content_tag :span, class: 'input-group-addon' do
              content_tag :span, '', class: 'glyphicon glyphicon-calendar'
            end)
      end
    end
  end

end

