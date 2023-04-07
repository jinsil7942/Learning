sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/resource/ResourceModel"
],

function (Controller, ResourceModel) {
    "use strict";

    return Controller.extend("com.gsitm.fiori.testlocalization.controller.App", {
        onInit: function () {
            var i18nModel = new ResourceModel({
                bundleName: "com.gsitm.fiori.testlocalization.i18n.i18n",
                async: true
            });
            this.getView().setModel(i18nModel, "i18n");
        },
        
        onButtonAction : function () {
            var oView = this.getView();
            var userInputValue = this.byId("inpTag").getValue();
            oView.getModel("i18n").getResourceBundle().then(function (oResourceBundle) {
                var sMsg = oResourceBundle.getText("localizationTitle", [userInputValue]);
                oView.byId("txtID").setText(sMsg);
            });
        }
    });
});
  