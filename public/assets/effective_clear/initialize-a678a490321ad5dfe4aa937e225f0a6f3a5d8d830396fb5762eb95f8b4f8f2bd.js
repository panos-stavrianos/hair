(function(){$(document).on("click","button[type=clear]",function(t){return t.preventDefault(),$(t.currentTarget).closest("form").trigger("clear")})}).call(this);