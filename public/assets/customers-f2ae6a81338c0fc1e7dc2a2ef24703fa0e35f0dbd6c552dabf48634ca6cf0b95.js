function refresh_by_range(e,t,n){e._d.setTimezone("Europe/Athens"),t._d.setTimezone("Europe/Athens");let o={start:e._d.getTime(),end:t._d.getTime(),label:n};$.post(location.pathname,o,function(e){$("#show_content").html(e),clear_datatables_list(),init_MyDataTables()}),"All"===n&&set_all_DaterRangePicker()}$(document).on("turbolinks:load",function(){console.log(":load customer"),init_MyDaterRangePicker(refresh_by_range)}),$(document).ready(function(){console.log(":ready customers"),init_MyDaterRangePicker(refresh_by_range)});