module ApplicationHelper

  def row(value, options = "")
    "<td #{options}>#{value}</td>".html_safe
  end

  def div_with_tooltip(value, tooltip, options = "")
    "<div data-toggle='tooltip' data-placement='top' title='#{tooltip}' #{options}>#{value}</div>".html_safe
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

  def show_row(path, value, html_options = nil, &block)
    row_link(value, path, html_options, &block)
  end

  def row_link_with_icon(icon_class = nil, options = nil, html_options = nil, &block)
    ('<td>' + link_to("#{icon(icon_class)}".html_safe, options, html_options, &block) + '</td>').html_safe
  end

  def row_link(value = nil, options = nil, html_options = nil, &block)
    ('<td>' + link_to("#{value}", options, html_options, &block) + '</td>').html_safe
  end

  def icon(icon_class)
    "<span class='#{icon_class}'></span>"
  end

  def datepicker_input(form, field)
    timezone = Timezone['Europe/Athens']

    content_tag :container do
      content_tag :row do
        (form.form_group :terms do
          content_tag :div, class: 'input-group date', id: 'sasa' do
            (form.text_field_without_bootstrap(field, {class: 'form-control',
                                                       :value => "#{timezone.utc_to_local(form.object[field]).try(:strftime, "%d-%m-%YYYY %H:%M") unless form.object.nil? }"})) +
                (content_tag :span, class: 'input-group-addon' do
                  content_tag :span, '', class: 'glyphicon glyphicon-calendar'
                end)
          end
        end)
      end
    end
  end

  def daterangepicker_input(form, field)
    timezone = Timezone['Europe/Athens']

    content_tag :container do
      content_tag :row do
        (form.form_group :terms do
          content_tag :div, class: 'input-group date', id: 'sasa' do
            (form.text_field_without_bootstrap(field, {class: 'form-control',
                                                       :value => "#{timezone.utc_to_local(form.object[field]).try(:strftime, "%d-%m-%YYYY %H:%M") unless form.object.nil? }"})) +
                (content_tag :span, class: 'input-group-addon' do
                  content_tag :span, '', class: 'glyphicon glyphicon-calendar'
                end)
          end
        end)
      end
    end
  end

  def percent_tile(value, text)
    color = value > 0 ? 'green' : 'red'
    arrow = value > 0 ? 'fa fa-sort-asc' : 'fa fa-sort-desc'

    content_tag :span, class: 'count_bottom' do
      concat (content_tag :i, class: color do
        concat content_tag :i, '', class: arrow
        concat "#{value}% "
      end)
      concat text
    end
  end

  def regular_tile(value, text)
    color = 'green'
    content_tag :span, class: 'count_bottom' do
      concat (content_tag :i, class: color do
        concat "#{value} "
      end)
      concat text
    end
  end

  def x_panel(title, small_title = '', collapsed = false, &block)
    # capture the value of the block a string
    content = capture(&block)

    "<div class='x_panel'>

      <div class='x_title'>
        <a class='collapse-link'>

          <h2>#{title}
            <small>#{small_title}</small>
          </h2>
        </a>
        <ul class='nav navbar-right panel_toolbox'>
          <li><a class='collapse-link'><i class='fa fa-chevron-up'></i></a>
          </li>
        </ul>
        <div class='clearfix'></div>
      </div>

      <div class='x_content' #{collapsed ? "style='display: none;'" : ''}'>
        #{(content)}
      </div>
    </div>".html_safe
  end

  class EffectiveIconsHelper

    # icon('check', class: 'big-4')
    # icon('check', class: 'small-3')
    def icon(svg, options = {})
      svg = svg.to_s.chomp('.svg')

      options.reverse_merge!(nocomment: true)
      options[:class] = [options[:class], "eb-icon eb-icon-#{svg}"].compact.join(' ')

      inline_svg("icons/#{svg}.svg", options)
    end

    def icon_to(svg, url, options = {})
      link_to(icon(svg), url, options)
    end

    def new_icon_to(path, options = {})
      icon_to('plus', path, {title: 'New'}.merge(options))
    end

    def show_icon_to(path, options = {})
      icon_to('eye', path, {title: 'Show'}.merge(options))
    end

    def edit_icon_to(path, options = {})
      icon_to('edit', path, {title: 'Edit'}.merge(options))
    end

    def destroy_icon_to(path, options = {})
      defaults = {title: 'Destroy', data: {method: :delete, confirm: 'Delete this item?'}}
      icon_to('trash', path, defaults.merge(options))
    end

    def settings_icon_to(path, options = {})
      icon_to('cog', path, {title: 'Settings'}.merge(options))
    end

    def ok_icon_to(path, options = {})
      icon_to('ok', path, {title: 'OK'}.merge(options))
    end

    def approve_icon_to(path, options = {})
      icon_to('ok', path, {title: 'Approve'}.merge(options))
    end

    def remove_icon_to(path, options = {})
      icon_to('remove', path, {title: 'Remove'}.merge(options))
    end

  end

end
