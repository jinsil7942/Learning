/*global QUnit*/

sap.ui.define([
	"comgsitmfiori/sap/controller/UI5-Page01.controller"
], function (Controller) {
	"use strict";

	QUnit.module("UI5-Page01 Controller");

	QUnit.test("I should test the UI5-Page01 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
