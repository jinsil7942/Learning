sap.ui.define(["sap/ui/core/mvc/Controller",
	"sap/ui/base/Event"], function(Controller,
	Event)
{
	"use strict";

	return Controller.extend("com.gsitm.fiori.sap.controller.UI5-Page02", {
        /**
         * @override
         */
        onInit: function() {
            alert("onInit");
        },

        /**
         * @override
         */
        onBeforeRendering: function() {
            // Controller.prototype.onBeforeRendering.apply(this, arguments);
            alert("onBeforeRendering");
        },

        /**
         * @override
         */
        onAfterRendering: function() {
            // Controller.prototype.onAfterRendering.apply(this, arguments);
            alert("onAfterRendering");
        },

        onPress: function(Event)
        {
            alert("onPress");
            this.getView().destroy();
        }
	});
});