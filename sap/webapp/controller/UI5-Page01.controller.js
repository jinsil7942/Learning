sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.gsitm.fiori.sap.controller.UI5-Page01", {
            onInit: function () {

            },

            onAlertXML: function () {
                alert("get XML Complete!");
            }
        });
    });
