/*global QUnit*/

sap.ui.define([
	"comgsitmfiori/test_localization/controller/UI5-Page02.controller"
], function (Controller) {
	"use strict";

	QUnit.module("UI5-Page02 Controller");

	QUnit.test("I should test the UI5-Page02 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
