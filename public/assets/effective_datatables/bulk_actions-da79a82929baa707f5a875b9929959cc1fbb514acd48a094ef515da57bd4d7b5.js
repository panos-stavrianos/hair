(function(){var t,a;$(document).on("change",".dataTables_wrapper input[data-role='bulk-action']",function(t){var e;return(e=$(t.currentTarget).closest(".dataTables_wrapper")).find("input[data-role='bulk-actions']").prop("checked",!1),a(e)}),$(document).on("change",".dataTables_wrapper input[data-role='bulk-actions']",function(t){var e,n;return e=(n=$(t.currentTarget).closest(".dataTables_wrapper")).find("input[data-role='bulk-action']"),$(t.currentTarget).is(":checked")?e.prop("checked",!0):e.prop("checked",!1),a(n)}),a=function(t){var a;return a=t.children().first().find(".buttons-bulk-actions").children("button"),t.find("input[data-role='bulk-action']:checked").length>0?a.removeAttr("disabled"):a.attr("disabled","disabled")},t=function(t,a){var e,n;return e=t.closest(".dataTables_wrapper").children().first().find(".buttons-bulk-actions").children("button"),n=!1,a&&a.length>0&&t.find("input[data-role='bulk-action']").each(function(t,e){var r;return r=$(e),a.indexOf(r.val())>-1?(r.prop("checked",!0),n=!0):r.prop("checked",!1)}),n?e.removeAttr("disabled"):e.attr("disabled","disabled")},$(document).on("click",".dataTables_wrapper .buttons-bulk-actions a",function(a){var e,n,r,l,c,d,i,o,u,s;if(a.preventDefault(),l=(e=$(a.currentTarget)).closest(".dataTables_wrapper"),(r=l.find("table.dataTable").first()).siblings(".dataTables_processing").first(),n=r.find("input[data-role='bulk-action']:checked"),u=e.attr("href"),i=e.text(),c=e.data("bulk-download"),o=r.data("authenticity-token"),s=$.map(n,function(t){return t.getAttribute("value")}),d=e.data("ajax-method"),u&&s){if("GET"!==d)return e.closest("button").attr("disabled","disabled"),r.dataTable().data("bulk-actions-restore-selected-values",s),c?$.fileDownload(u,{httpMethod:"POST",data:{ids:s,authenticity_token:o},successCallback:function(){var t;return t="Successfully completed "+i+" bulk action",r.one("draw.dt",function(a){return $(a.target).DataTable().flash(t,"success")}),r.DataTable().draw()},failCallback:function(){var t;return t="An error occured while attempting "+i+" bulk action",r.one("draw.dt",function(a){return $(a.target).DataTable().flash(t,"danger")}),r.DataTable().draw()}}):(r.dataTable().data("bulk-actions-restore-selected-values",s),$.ajax({method:d,url:u,data:{ids:s,authenticity_token:o}}).done(function(a){var e;return e=a.message||"Successfully completed "+i+" bulk action",r.one("draw.dt",function(a){return $(a.target).DataTable().flash(e,"success")&&t($(a.target),s)})}).fail(function(a){var e;return e=a.message||"An error occured while attempting "+i+" bulk action: "+a.statusText,r.one("draw.dt",function(a){return $(a.target).DataTable().flash(e,"danger")&&t($(a.target),s)})}).always(function(){return r.DataTable().draw()}));u.includes("?")?window.location.assign(u+"&"+$.param({ids:s})):window.location.assign(u+"?"+$.param({ids:s}))}})}).call(this);