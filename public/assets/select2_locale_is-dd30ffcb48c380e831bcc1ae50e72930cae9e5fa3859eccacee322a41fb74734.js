/*! Select2 4.0.3 | https://github.com/select2/select2/blob/master/LICENSE.md */
!function(){if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var n=jQuery.fn.select2.amd;n.define("select2/i18n/is",[],function(){return{inputTooLong:function(n){var t=n.input.length-n.maximum,e="Vinsamlegast stytti\xf0 texta um "+t+" staf";return t<=1?e:e+"i"},inputTooShort:function(n){var t=n.minimum-n.input.length,e="Vinsamlegast skrifi\xf0 "+t+" staf";return t>1&&(e+="i"),e+=" \xed vi\xf0b\xf3t"},loadingMore:function(){return"S\xe6ki fleiri ni\xf0urst\xf6\xf0ur\u2026"},maximumSelected:function(n){return"\xde\xfa getur a\xf0eins vali\xf0 "+n.maximum+" atri\xf0i"},noResults:function(){return"Ekkert fannst"},searching:function(){return"Leita\u2026"}}}),n.define,n.require}();