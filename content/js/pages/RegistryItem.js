///
// A class for doing things with registry items
///
var RegistryItems = {

    personId: null,

    itemId: null,

    context: null,


    // Show the buttons to confirm everything
    showConfirmation: function () {
        $(this).hide();
        $(this).parent().find(".confirmPurchase").show(500);
    },

    // Confirm the item and save the data
    confirmItem: function () {

        // Success 
        function onSuccessfulFind(data) {
            if (data) {
                RegistryItems.personId = data;
                savePersonItem();
            } else {
                $(RegistryItems.context).parent().parent().find(".message").show(500).text("Person Not Found - Please Try Again");
            }
        }

        // Failure
        function onFailFind(jqXHR, textStatus, errorThrown) {
            if (jqXHR.status != 200) {
                $(RegistryItems.context).parent().parent().find(".message").show(500).text("An Error occurred: " + textStatus);
            }
        }

        function onSuccessfulSave() {
            $(RegistryItems.context).parent().parent().find(".message").show(500).text("THANK YOU FOR REGISTERING YOUR ITEM");
            $(RegistryItems.context).parent().parent().find(".confirmPurchase").hide();
        }

        // Save Person 
        function savePersonItem() {
            // Create the data object to post
            var postData = {
                personId: RegistryItems.personId,
                registryItemId: RegistryItems.itemId
            };

            // If the person is valid then 
            $.ajax(
                {
                    url: "RegistryItem/SavePersonItem",
                    type: "POST",
                    data: postData,
                    success: onSuccessfulSave,
                    error: onFailFind
                });
        }

        // Get the initial and surname from the page
        var postData = {
            initial: $(this).parent().find("input.initial").val(),
            lastName: $(this).parent().find("input.lastName").val()
        };


        // Default the Ids
        RegistryItems.itemId = $(this).parent().find("input.registryItemId").val();
        RegistryItems.personId = null;
        RegistryItems.context = this;

        // If the person is valid then 
        $.ajax({
            url: "Person/CheckPerson",
            type: "POST",
            data: postData,
            dataType: "json",
            success: onSuccessfulFind,
            error: onFailFind
        });
    },

    // Cancel purchase of the items
    cancelItem: function () {
        var purchaseButton = $(this).closest(".purchaseButton");
        purchaseButton.find("a.getThis").show();
        purchaseButton.find(".confirmPurchase").hide(500);
        purchaseButton.find(".message").hide();
    }
};

// On Load
$(function () {
    $("a.getThis").click(RegistryItems.showConfirmation);
    $("a.confirmButton").click(RegistryItems.confirmItem);
    $("a.cancelButton").click(RegistryItems.cancelItem);
    $("input, textarea").placehold();
});
