(function(){(this.EffectiveBootstrap||{}).effective_editor=function(t,e){var n,o,r,i;return r="#"+t.attr("id")+"_editor",o=e.content_mode,delete e.content_mode,i=new Quill(t.siblings(r).get(0),e),(n=t.val()||"").length>0&&(n.startsWith("{")?i.setContents(JSON.parse(n)):"code"===o?i.setText(n):n.startsWith("<")?i.pasteHTML(n):i.setText(n)),"code"===o?(i.formatText(0,i.getLength(),"code-block",!0),i.on("text-change",function(){return t.val(i.getText()),t.trigger("change")})):"html"===o?i.on("text-change",function(){var e;return"<p><br></p>"!==(e=$(r).children(".ql-editor").html())&&"<p></p>"!==e||(e=""),t.val(e),t.trigger("change")}):i.on("text-change",function(){return t.val(JSON.stringify(i.getContents())),t.trigger("change")}),t.on("quill:focus",function(){return i.focus()})},(this.EffectiveBootstrap||{}).effective_editor_tag=function(t,e){var n,o,r;if(r=new Quill("#"+t.attr("id"),e),n=t.attr("data-content")||"",o=t.data("input-js-options").content_mode,n.length>0&&(n.startsWith("{")?r.setContents(JSON.parse(n)):"code"===o?r.setText(n):n.startsWith("<")?r.pasteHTML(n):r.setText(n)),"code"===o)return r.formatText(0,r.getLength(),"code-block",!0)}}).call(this);