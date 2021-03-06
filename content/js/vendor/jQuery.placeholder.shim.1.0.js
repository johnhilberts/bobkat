/**
* @name jQuery placehold (https://github.com/jgarber623/jquery-placehold)
* @author Jason Garber
* @copyright (cc) Jason Garber (http://sixtwothree.org and http://www.viget.com)
* 
* Licensed under the CC-GNU GPL (http://creativecommons.org/licenses/GPL/2.0/)
*/

(function (a) { a.fn.placehold = function (d) { var d = d || "placeholder", c = a.fn.placehold.is_supported(); function b() { for (i = 0; i < arguments.length; i++) { arguments[i].toggle(); } } return c ? this : this.each(function () { var f = a(this), e = f.attr("placeholder"); if (e) { if (f.val() === "" || f.val() == e) { f.addClass(d).val(e); } if (f.is(":password")) { var g = a("<input />", { "class": f.attr("class") + " " + d, value: e }); g.bind("focus.placehold", function () { b(f, g); f.focus(); }); f.bind("blur.placehold", function () { if (f.val() === "") { b(f, g); } }); f.hide().after(g); } f.bind({ "focus.placehold": function () { if (f.val() == e) { f.removeClass(d).val(""); } }, "blur.placehold": function () { if (f.val() === "") { f.addClass(d).val(e); } } }); f.closest("form").bind("submit.placehold", function () { if (f.val() == e) { f.val(""); } return true; }); } }); }; a.fn.placehold.is_supported = function () { return "placeholder" in document.createElement("input"); }; })(jQuery);