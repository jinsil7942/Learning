/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comgsitmfioritest_step2/test_step2_horizonatal/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
