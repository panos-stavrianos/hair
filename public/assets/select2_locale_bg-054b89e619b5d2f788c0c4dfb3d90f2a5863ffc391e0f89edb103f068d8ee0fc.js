/*! Select2 4.0.3 | https://github.com/select2/select2/blob/master/LICENSE.md */
!function(){if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var n=jQuery.fn.select2.amd;n.define("select2/i18n/bg",[],function(){return{inputTooLong:function(n){var e=n.input.length-n.maximum,u="\u041c\u043e\u043b\u044f \u0432\u044a\u0432\u0435\u0434\u0435\u0442\u0435 \u0441 "+e+" \u043f\u043e-\u043c\u0430\u043b\u043a\u043e \u0441\u0438\u043c\u0432\u043e\u043b";return e>1&&(u+="a"),u},inputTooShort:function(n){var e=n.minimum-n.input.length,u="\u041c\u043e\u043b\u044f \u0432\u044a\u0432\u0435\u0434\u0435\u0442\u0435 \u043e\u0449\u0435 "+e+" \u0441\u0438\u043c\u0432\u043e\u043b";return e>1&&(u+="a"),u},loadingMore:function(){return"\u0417\u0430\u0440\u0435\u0436\u0434\u0430\u0442 \u0441\u0435 \u043e\u0449\u0435\u2026"},maximumSelected:function(n){var e="\u041c\u043e\u0436\u0435\u0442\u0435 \u0434\u0430 \u043d\u0430\u043f\u0440\u0430\u0432\u0438\u0442\u0435 \u0434\u043e "+n.maximum+" ";return n.maximum>1?e+="\u0438\u0437\u0431\u043e\u0440\u0430":e+="\u0438\u0437\u0431\u043e\u0440",e},noResults:function(){return"\u041d\u044f\u043c\u0430 \u043d\u0430\u043c\u0435\u0440\u0435\u043d\u0438 \u0441\u044a\u0432\u043f\u0430\u0434\u0435\u043d\u0438\u044f"},searching:function(){return"\u0422\u044a\u0440\u0441\u0435\u043d\u0435\u2026"}}}),n.define,n.require}();