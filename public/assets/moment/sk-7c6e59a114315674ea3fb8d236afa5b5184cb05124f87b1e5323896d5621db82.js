//! moment.js locale configuration
//! locale : Slovak [sk]
//! author : Martin Minka : https://github.com/k2s
//! based on work of petrbela : https://github.com/petrbela
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module&&"function"==typeof require?t(require("../moment")):"function"==typeof define&&define.amd?define(["../moment"],t):t(e.moment)}(this,function(e){"use strict";function t(e){return e>1&&e<5}function n(e,n,r,o){var s=e+" ";switch(r){case"s":return n||o?"p\xe1r sek\xfand":"p\xe1r sekundami";case"m":return n?"min\xfata":o?"min\xfatu":"min\xfatou";case"mm":return n||o?s+(t(e)?"min\xfaty":"min\xfat"):s+"min\xfatami";case"h":return n?"hodina":o?"hodinu":"hodinou";case"hh":return n||o?s+(t(e)?"hodiny":"hod\xedn"):s+"hodinami";case"d":return n||o?"de\u0148":"d\u0148om";case"dd":return n||o?s+(t(e)?"dni":"dn\xed"):s+"d\u0148ami";case"M":return n||o?"mesiac":"mesiacom";case"MM":return n||o?s+(t(e)?"mesiace":"mesiacov"):s+"mesiacmi";case"y":return n||o?"rok":"rokom";case"yy":return n||o?s+(t(e)?"roky":"rokov"):s+"rokmi"}}var r="janu\xe1r_febru\xe1r_marec_apr\xedl_m\xe1j_j\xfan_j\xfal_august_september_okt\xf3ber_november_december".split("_"),o="jan_feb_mar_apr_m\xe1j_j\xfan_j\xfal_aug_sep_okt_nov_dec".split("_");return e.defineLocale("sk",{months:r,monthsShort:o,weekdays:"nede\u013ea_pondelok_utorok_streda_\u0161tvrtok_piatok_sobota".split("_"),weekdaysShort:"ne_po_ut_st_\u0161t_pi_so".split("_"),weekdaysMin:"ne_po_ut_st_\u0161t_pi_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm"},calendar:{sameDay:"[dnes o] LT",nextDay:"[zajtra o] LT",nextWeek:function(){switch(this.day()){case 0:return"[v nede\u013eu o] LT";case 1:case 2:return"[v] dddd [o] LT";case 3:return"[v stredu o] LT";case 4:return"[vo \u0161tvrtok o] LT";case 5:return"[v piatok o] LT";case 6:return"[v sobotu o] LT"}},lastDay:"[v\u010dera o] LT",lastWeek:function(){switch(this.day()){case 0:return"[minul\xfa nede\u013eu o] LT";case 1:case 2:return"[minul\xfd] dddd [o] LT";case 3:return"[minul\xfa stredu o] LT";case 4:case 5:return"[minul\xfd] dddd [o] LT";case 6:return"[minul\xfa sobotu o] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"pred %s",s:n,m:n,mm:n,h:n,hh:n,d:n,dd:n,M:n,MM:n,y:n,yy:n},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})});