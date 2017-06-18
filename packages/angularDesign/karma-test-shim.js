Error.stackTraceLimit = Infinity;

require('core-js/es6');
require('core-js/es7/reflect');

require('zone.js/dist/zone');
require('zone.js/dist/long-stack-trace-zone');
require('zone.js/dist/proxy');
require('zone.js/dist/sync-test');
require('zone.js/dist/jasmine-patch');
require('zone.js/dist/async-test');
require('zone.js/dist/fake-async-test');

// for unit test
var appContext = require.context('./src/test/unit', true, /\.spec\.ts/);
appContext.keys().forEach(appContext);

// for source code to check coverage of unit test covered
var componentsContext = require.context('./src/trend_design', true, /\.ts$/);
componentsContext.keys().forEach(componentsContext);

var testing = require('@angular/core/testing');
var browser = require('@angular/platform-browser-dynamic/testing');

testing.TestBed.initTestEnvironment(browser.BrowserDynamicTestingModule, browser.platformBrowserDynamicTesting());