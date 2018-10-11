module ApplicationHelper
  def row(value)
    "<td>#{value}</td>".html_safe
  end

  def row_hidden(value)
    "<td>#{value}</td>".html_safe
  end
  def delete_row(record)
    row_link_with_icon('glyphicon glyphicon-trash text-danger', record, method: :delete, data: {confirm: 'Are you sure?'})
  end

  def edit_row(path)
    row_link_with_icon('glyphicon glyphicon-edit text-success', path)
  end

  def row_link_with_icon(icon_class = nil, options = nil, html_options = nil, &block)
    ('<td>' + link_to("#{icon(icon_class)}".html_safe, options, html_options, &block) + '</td>').html_safe
  end

  def icon(icon_class)
    "<span class='#{icon_class}'></span>"

  end
end
