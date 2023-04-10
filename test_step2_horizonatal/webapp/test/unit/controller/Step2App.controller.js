/*global QUnit*/

sap.ui.define([
	"comgsitmfioritest_step2/test_step2_horizonatal/controller/Step2App.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Step2App Controller");

	QUnit.test("I should test the Step2App controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
