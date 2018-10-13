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

  def row_with_link(path, html_options = nil, &block)
    row_link_with_icon('glyphicon glyphicon-edit text-success', path, html_options, &block)
  end

  def row_link_with_icon(icon_class = nil, options = nil, html_options = nil, &block)
    ('<td>' + link_to("#{icon(icon_class)}".html_safe, options, html_options, &block) + '</td>').html_safe
  end

  def icon(icon_class)
    "<span class='#{icon_class}'></span>"
  end
end
