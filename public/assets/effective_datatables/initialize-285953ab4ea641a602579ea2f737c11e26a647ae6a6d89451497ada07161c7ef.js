(function(){var e,t;t=function(e){return $(e||document).find("table.effective-datatable:not(.initialized)").each(function(){var e,t,n,a,r,i,o,s,l,c,d,u;e=(c=(n=$(this)).data("options")||{}).buttons_export_columns||":not(.col-actions)",d=n.data("reorder"),!1===c.buttons&&(c.buttons=[]),i={ajax:{url:n.data("source"),type:"POST"},autoWidth:!1,buttons:[{extend:"colvis",postfixButtons:[{extend:"colvisGroup",text:"Show all",show:":hidden",className:"buttons-colvisGroup-first"},{extend:"colvisGroup",text:"Show none",hide:":visible"},{extend:"colvisGroup",text:"Show default",hide:":not(.colvis-default)",show:".colvis-default"}]},{extend:"copy",exportOptions:{format:{header:function(e){return $("<div>"+e+"</div>").children("span").first().text()}},columns:e}},{extend:"csv",exportOptions:{format:{header:function(e){return $("<div>"+e+"</div>").children("span").first().text()}},columns:e}},{extend:"print",footer:!0,exportOptions:{format:{header:function(e){return $("<div>"+e+"</div>").children("span").first().text()}},columns:":visible:not(.col-actions)"}}],columns:n.data("columns"),deferLoading:[n.data("display-records"),n.data("total-records")],deferRender:!0,displayStart:n.data("display-start"),iDisplayLength:n.data("display-length"),language:n.data("language"),lengthMenu:[[5,10,25,50,100,250,500,9999999],["5","10","25","50","100","250","500","All"]],order:n.data("display-order"),processing:!0,responsive:!0,serverParams:function(e){var t,n,a;if((a=this.api()).columns().flatten().each(function(t){return e.columns[t].visible=a.column(t).visible()}),n=$(a.table().node()),t=$(".effective-datatables-filters[aria-controls='"+n.attr("id")+"']").first(),e.attributes=n.data("attributes"),e.authenticity_token=n.data("authenticity-token"),t.length>0)return e.scope=t.find("input[name='filters[scope]']:checked").val()||"",e.filter={},t.find("select,textarea,input:not([type=submit])").each(function(){var n,a,r;if(n=$(this),["utf8","authenticity_token","filters[scope]"].includes(n.attr("name")));else{if("radio"===n.attr("type"))return a=(r=n.attr("name")).replace("filters[","").substring(0,r.length-9),e.filter[a]=t.find("input[name='"+r+"']:checked").val();if(n.attr("id"))return a=n.attr("id").replace("filters_",""),e.filter[a]=n.val()}})},serverSide:!0,scrollCollapse:!0,pagingType:"simple_numbers",initComplete:function(){return o(this.api()),s(this.api())},drawCallback:function(e){var t;if(t=$(this.api().table().node()),e.json)return e.json.effective_datatables_error?void alert("DataTable error: "+e.json.effective_datatables_error+"\n\nPlease refresh the page and try again"):(e.json.aggregates&&a(t,e.json.aggregates),e.json.charts&&r(t,e.json.charts),t.children("tbody").trigger("effective-bootstrap:initialize"))}},o=function(e){var t,n;if(t=(n=$(e.table().node())).closest(".dataTables_wrapper").children().first().find(".dt-buttons"),n.data("reset")&&t.prepend(n.data("reset")),n.data("reorder")&&t.prepend(n.data("reorder")),n.data("bulk-actions"))return t.prepend(n.data("bulk-actions"))},a=function(e,t){var n;return n=e.find("tfoot").first(),$.each(t,function(e,t){var a;if(a=n.children().eq(e))return $.each(t,function(e,t){return a.children().eq(e).html(t)})})},r=function(e,t){if("undefined"!=typeof google&&"undefined"!=typeof google.visualization)return $.each(t,function(e,t){return $(".effective-datatables-chart[data-name='"+e+"']").each(function(e,n){return new google.visualization[t.type](n).draw(google.visualization.arrayToDataTable(t.data),t.options)})})},s=function(e){return e.columns().flatten().each(function(t){var n,a;if(n=$(e.column(t).header()),null!==(a=e.settings()[0].aoColumns[t]).search&&(e.settings()[0].aoPreSearchCols[t].sSearch=a.search),a.searchHtml)return n.append(a.searchHtml),l(n)})},l=function(e){return e.find("input,select").each(function(e,n){var a;return"hidden"===(a=$(n)).attr("type")||"checkbox"===a.attr("type")||(a.parent().on("click",function(){return!1}),a.parent().on("mousedown",function(e){return e.stopPropagation()}),a.is("select")?a.on("change",function(e){return t($(e.currentTarget))}):a.is("input")?(a.delayedChange(function(e){return t(e)}),a.on("paste",function(){return t(a)})):void 0)})},t=function(e){if(!e.is(":invalid"))return e.closest("table.dataTable").DataTable().column(e.data("column-name")+":name").search(e.val()).draw()},d&&(i.rowReorder={selector:"td.col-_reorder",snapX:!0,dataSrc:n.data("reorder-index")}),(u=n.dataTable(jQuery.extend(i,c))).children("tbody").children("tr").children("td[tabindex]").removeAttr("tabindex");try{u.closest(".dataTables_wrapper").find(".dataTables_length select").removeAttr("name").select2({minimumResultsForSearch:100})}catch(f){}return d&&u.DataTable().on("row-reorder",function(e,t,n){return $(e.target).DataTable().reorder(e,t,n)}),u.addClass("initialized"),u.children("thead").trigger("effective-bootstrap:initialize"),!0})},e=function(){return $(".effective-datatables-inline-expanded").removeClass("effective-datatables-inline-expanded"),$("table.effective-datatable").each(function(){try{return $(this).removeClass("initialized").DataTable().destroy()}catch(e){}})},$(function(){return t()}),$(document).on("effective-datatables:initialize",function(e){return t(e.currentTarget)}),$(document).on("page:change",function(){return t()}),$(document).on("turbolinks:load",function(){return t()}),$(document).on("turbolinks:render",function(){return t()}),$(document).on("turbolinks:before-cache",function(){return e()})}).call(this);