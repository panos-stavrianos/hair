function set_sum(){let e=0;$("select.in_price").each(function(){let t=$(this).parent().parent().parent().find("input.amount").val(),o=$(this).parent().parent().parent().find("input.custom_price").val();console.log(t),console.log(o),t.trim()||(t=1),$(this).find("option:selected").each(function(){let n=parseFloat($(this).data().price);o.trim()&&(n=o),isNaN(n)||(e+=n*t)})});let t=parseFloat($("#discount_per_cent").val());t||(t=0),e=((100-t)*e/100).toFixed(2),$(".sum").text(`${e}\u20ac`)}function modal_init(){$(document).on("click","#add_service,#add_product",function(e){e.preventDefault(),e.stopPropagation(),$(".collapse").collapse(),$(".selectpicker").selectpicker(),$("input").tooltip()}),$(document).on("keyup change","#discount_per_cent,input.amount,input.custom_price,select.in_price",function(){set_sum()}),$(document).on("change","#discount_id",function(){$(this).find("option:selected").each(function(){let e=parseFloat($(this).data().percent);$("#discount_per_cent").val(e)}),set_sum()}),$(document).on("click",".more_fields_toggle",function(){console.log("more_fields_toggle"),$(this).parent().children(".more_fields").slideToggle(),$(this).children("i").toggleClass("glyphicon-chevron-up glyphicon-chevron-down")}),$(".selectpicker").selectpicker(),$(".input-group.date").datetimepicker({format:"DD/MM/YYYY HH:mm",locale:"el",allowInputToggle:!0,showClose:!0})}$(document).on("turbolinks:load",function(){$.ajax({url:"/dashboard/create_form_modal",cache:!1,success:function(e){$("#form_modal").html(e),modal_init()}}),console.log(":load dashboard")}),$(document).ready(function(){console.log(":ready dashboard")});