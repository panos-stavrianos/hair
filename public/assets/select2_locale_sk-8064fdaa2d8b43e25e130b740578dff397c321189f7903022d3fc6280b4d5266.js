/*! Select2 4.0.3 | https://github.com/select2/select2/blob/master/LICENSE.md */
!function(){if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var e=jQuery.fn.select2.amd;e.define("select2/i18n/sk",[],function(){var e={2:function(e){return e?"dva":"dve"},3:function(){return"tri"},4:function(){return"\u0161tyri"}};return{inputTooLong:function(n){var t=n.input.length-n.maximum;return 1==t?"Pros\xedm, zadajte o jeden znak menej":t>=2&&t<=4?"Pros\xedm, zadajte o "+e[t](!0)+" znaky menej":"Pros\xedm, zadajte o "+t+" znakov menej"},inputTooShort:function(n){var t=n.minimum-n.input.length;return 1==t?"Pros\xedm, zadajte e\u0161te jeden znak":t<=4?"Pros\xedm, zadajte e\u0161te \u010fal\u0161ie "+e[t](!0)+" znaky":"Pros\xedm, zadajte e\u0161te \u010fal\u0161\xedch "+t+" znakov"},loadingMore:function(){return"Loading more results\u2026"},maximumSelected:function(n){return 1==n.maximum?"M\xf4\u017eete zvoli\u0165 len jednu polo\u017eku":n.maximum>=2&&n.maximum<=4?"M\xf4\u017eete zvoli\u0165 najviac "+e[n.maximum](!1)+" polo\u017eky":"M\xf4\u017eete zvoli\u0165 najviac "+n.maximum+" polo\u017eiek"},noResults:function(){return"Nena\u0161li sa \u017eiadne polo\u017eky"},searching:function(){return"Vyh\u013ead\xe1vanie\u2026"}}}),e.define,e.require}();