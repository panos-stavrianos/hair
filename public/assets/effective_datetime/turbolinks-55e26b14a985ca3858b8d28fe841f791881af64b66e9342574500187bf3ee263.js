(function(){$(document).on("turbolinks:before-cache",function(){return $("input.initialized.effective_date_time_picker").each(function(e,i){var t;return(t=$(i)).data("datetimepicker")&&t.datetimepicker("destroy"),t.removeClass("initialized")})})}).call(this);