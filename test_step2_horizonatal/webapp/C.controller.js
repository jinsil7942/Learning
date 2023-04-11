sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"./RevealGrid/RevealGrid"
], function (Controller, RevealGrid) {
	"use strict";

	return Controller.extend("com.gsitm.fiori.teststep2.teststep2horizonatal", {

		onExit: function() {
			RevealGrid.destroy(["gridList1", "gridList2", "gridList3"], this.getView());
		},

		onRevealGrid: function () {
			RevealGrid.toggle(["gridList1", "gridList2", "gridList3"], this.getView());
		},

		onSliderMoved: function (oEvent) {
			var fValue = oEvent.getParameter("value");
			this.byId("gridList").setWidth(fValue + "%");
		}

	});
});