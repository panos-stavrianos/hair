/*! KeyTable 2.1.2
 * ©2009-2016 SpryMedia Ltd - datatables.net/license
 */
/**
 * @summary     KeyTable
 * @description Spreadsheet like keyboard navigation for DataTables
 * @version     2.1.2
 * @file        dataTables.keyTable.js
 * @author      SpryMedia Ltd (www.sprymedia.co.uk)
 * @contact     www.sprymedia.co.uk/contact
 * @copyright   Copyright 2009-2016 SpryMedia Ltd.
 *
 * This source file is free software, available under the following license:
 *   MIT license - http://datatables.net/license/mit
 *
 * This source file is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 * or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.
 *
 * For details please refer to: http://www.datatables.net
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery","datatables.net"],function(t){return e(t,window,document)}):"object"==typeof exports?module.exports=function(t,s){return t||(t=window),s&&s.fn.dataTable||(s=require("datatables.net")(t,s).$),e(s,t,t.document)}:e(jQuery,window,document)}(function(e,t,s,n){"use strict";var i=e.fn.dataTable,a=function(t,s){if(!i.versionCheck||!i.versionCheck("1.10.8"))throw"KeyTable requires DataTables 1.10.8 or newer";this.c=e.extend(!0,{},i.defaults.keyTable,a.defaults,s),this.s={dt:new i.Api(t),enable:!0,focusDraw:!1},this.dom={};var n=this.s.dt.settings()[0],l=n.keytable;if(l)return l;n.keytable=this,this._constructor()};return e.extend(a.prototype,{blur:function(){this._blur()},enable:function(e){this.s.enable=e},focus:function(e,t){this._focus(this.s.dt.cell(e,t))},focused:function(e){if(!this.s.lastFocus)return!1;var t=this.s.lastFocus.index();return e.row===t.row&&e.column===t.column},_constructor:function(){this._tabInput();var t=this,n=this.s.dt,i=e(n.table().node());"static"===i.css("position")&&i.css("position","relative"),e(n.table().body()).on("click.keyTable","th, td",function(){if(!1!==t.s.enable){var e=n.cell(this);e.any()&&t._focus(e,null,!1)}}),e(s).on("keydown.keyTable",function(e){t._key(e)}),this.c.blurable&&e(s).on("click.keyTable",function(s){e(s.target).parents(".dataTables_filter").length&&t._blur(),e(s.target).parents().filter(n.table().container()).length||e(s.target).parents("div.DTE").length||t._blur()}),this.c.editor&&n.on("key.keyTable",function(e,s,n,i,a){t._editor(n,a)}),n.settings()[0].oFeatures.bStateSave&&n.on("stateSaveParams.keyTable",function(e,s,n){n.keyTable=t.s.lastFocus?t.s.lastFocus.index():null}),n.on("xhr.keyTable",function(){if(!t.s.focusDraw){var e=t.s.lastFocus;e&&(t.s.lastFocus=null,n.one("draw",function(){t._focus(e)}))}}),n.on("destroy.keyTable",function(){n.off(".keyTable"),e(n.table().body()).off("click.keyTable","th, td"),e(s.body).off("keydown.keyTable").off("click.keyTable")});var a=n.state.loaded();a&&a.keyTable?n.one("init",function(){var e=n.cell(a.keyTable);e.any()&&e.focus()}):this.c.focus&&n.cell(this.c.focus).focus()},_blur:function(){if(this.s.enable&&this.s.lastFocus){var t=this.s.lastFocus;e(t.node()).removeClass(this.c.className),this.s.lastFocus=null,this._emitEvent("key-blur",[this.s.dt,t])}},_columns:function(){var e=this.s.dt,t=e.columns(this.c.columns).indexes(),s=[];return e.columns(":visible").every(function(e){-1!==t.indexOf(e)&&s.push(e)}),s},_editor:function(t,s){var n=this.s.dt,i=this.c.editor;s.stopPropagation(),13===t&&s.preventDefault(),i.inline(this.s.lastFocus.index());var a=e("div.DTE input, div.DTE textarea");a.length&&a[0].select(),n.keys.enable("navigation-only"),n.one("key-blur.editor",function(){i.displayed()&&i.submit()}),i.one("close",function(){n.keys.enable(!0),n.off("key-blur.editor")})},_emitEvent:function(t,s){this.s.dt.iterator("table",function(n){e(n.nTable).triggerHandler(t,s)})},_focus:function(i,a,l){var o=this,r=this.s.dt,c=r.page.info(),u=this.s.lastFocus;if(this.s.enable){if("number"!=typeof i){var f=i.index();a=f.column,i=r.rows({filter:"applied",order:"applied"}).indexes().indexOf(f.row),c.serverSide&&(i+=c.start)}if(-1!==c.length&&(i<c.start||i>=c.start+c.length))return this.s.focusDraw=!0,void r.one("draw",function(){o.s.focusDraw=!1,o._focus(i,a)}).page(Math.floor(i/c.length)).draw(!1);if(-1!==e.inArray(a,this._columns())){c.serverSide&&(i-=c.start);var d=r.cell(":eq("+i+")",a,{search:"applied"});if(u){if(u.node()===d.node())return;this._blur()}var h=e(d.node());if(h.addClass(this.c.className),l===n||!0===l){this._scroll(e(t),e(s.body),h,"offset");var b=r.table().body().parentNode;if(b!==r.table().header().parentNode){var y=e(b.parentNode);this._scroll(y,y,h,"position")}}this.s.lastFocus=d,this._emitEvent("key-focus",[this.s.dt,d]),r.state.save()}}},_key:function(t){if(this.s.enable&&!(0===t.keyCode||t.ctrlKey||t.metaKey||t.altKey)){var s=this.s.lastFocus;if(s){var n=this,i=this.s.dt;if(!this.c.keys||-1!==e.inArray(t.keyCode,this.c.keys))switch(t.keyCode){case 9:this._shift(t,t.shiftKey?"left":"right",!0);break;case 27:this.s.blurable&&!0===this.s.enable&&this._blur();break;case 33:case 34:t.preventDefault();var a=i.cells({page:"current"}).nodes().indexOf(s.node());i.one("draw",function(){var e=i.cells({page:"current"}).nodes();n._focus(i.cell(a<e.length?e[a]:e[e.length-1]))}).page(33===t.keyCode?"previous":"next").draw(!1);break;case 35:case 36:t.preventDefault();var l=i.cells({page:"current"}).indexes();this._focus(i.cell(l[35===t.keyCode?l.length-1:0]));break;case 37:this._shift(t,"left");break;case 38:this._shift(t,"up");break;case 39:this._shift(t,"right");break;case 40:this._shift(t,"down");break;default:!0===this.s.enable&&this._emitEvent("key",[i,t.keyCode,this.s.lastFocus,t])}}}},_scroll:function(e,t,s,n){var i=s[n](),a=s.outerHeight(),l=s.outerWidth(),o=t.scrollTop(),r=t.scrollLeft(),c=e.height(),u=e.width();i.top<o&&t.scrollTop(i.top),i.left<r&&t.scrollLeft(i.left),i.top+a>o+c&&a<c&&t.scrollTop(i.top+a-c),i.left+l>r+u&&l<u&&t.scrollLeft(i.left+l-u)},_shift:function(t,s,n){var i=this.s.dt,a=i.page.info(),l=a.recordsDisplay,o=this.s.lastFocus,r=this._columns();if(o){var c=i.rows({filter:"applied",order:"applied"}).indexes().indexOf(o.index().row);a.serverSide&&(c+=a.start);var u=i.columns(r).indexes().indexOf(o.index().column),f=c,d=r[u];"right"===s?u>=r.length-1?(f++,d=r[0]):d=r[u+1]:"left"===s?0===u?(f--,d=r[r.length-1]):d=r[u-1]:"up"===s?f--:"down"===s&&f++,f>=0&&f<l&&-1!==e.inArray(d,r)?(t.preventDefault(),this._focus(f,d)):n&&this.c.blurable?this._blur():t.preventDefault()}},_tabInput:function(){var t=this,s=this.s.dt,n=null!==this.c.tabIndex?this.c.tabIndex:s.settings()[0].iTabIndex;-1!=n&&e('<div><input type="text" tabindex="'+n+'"/></div>').css({position:"absolute",height:1,width:0,overflow:"hidden"}).insertBefore(s.table().node()).children().on("focus",function(){t._focus(s.cell(":eq(0)","0:visible",{page:"current"}))})}}),a.defaults={blurable:!0,className:"focus",columns:"",editor:null,focus:null,keys:null,tabIndex:null},a.version="2.1.2",e.fn.dataTable.KeyTable=a,e.fn.DataTable.KeyTable=a,i.Api.register("cell.blur()",function(){return this.iterator("table",function(e){e.keytable&&e.keytable.blur()})}),i.Api.register("cell().focus()",function(){return this.iterator("cell",function(e,t,s){e.keytable&&e.keytable.focus(t,s)})}),i.Api.register("keys.disable()",function(){return this.iterator("table",function(e){e.keytable&&e.keytable.enable(!1)})}),i.Api.register("keys.enable()",function(e){return this.iterator("table",function(t){t.keytable&&t.keytable.enable(e===n||e)})}),i.ext.selector.cell.push(function(e,t,s){var i=t.focused,a=e.keytable,l=[];if(!a||i===n)return s;for(var o=0,r=s.length;o<r;o++)(!0===i&&a.focused(s[o])||!1===i&&!a.focused(s[o]))&&l.push(s[o]);return l}),e(s).on("preInit.dt.dtk",function(t,s){if("dt"===t.namespace){var n=s.oInit.keys,l=i.defaults.keys;if(n||l){var o=e.extend({},n,l);!1!==n&&new a(s,o)}}}),a});