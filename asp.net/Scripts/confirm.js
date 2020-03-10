var BobKatRegistry = BobKatRegistry || {};
BobKatRegistry.confirmation || (BobKatRegistry.confirmation = {}); 

(function () {
    this.confirm = function(first, last) {
        return false;
        $.ajax({
          type: "POST",
          url: "Default.aspx/GetDate",
          data: "{}",
          contentType: "application/json; charset=utf-8",
          dataType: "json",
          success: function(msg) {
            $("#Result").text(msg.d);
          }
        });

    }
}).apply(BobKatRegistry.confirmation);
