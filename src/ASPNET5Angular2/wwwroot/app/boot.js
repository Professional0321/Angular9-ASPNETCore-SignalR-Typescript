var browser_1 = require('angular2/platform/browser');
var router_1 = require('angular2/router');
var http_1 = require('angular2/http');
var app_component_1 = require('./app.component');
var app_constants_1 = require('./app.constants');
var signalRService_1 = require('./services/signalRService');
browser_1.bootstrap(app_component_1.AppComponent, [
    router_1.ROUTER_PROVIDERS,
    http_1.HTTP_PROVIDERS,
    app_constants_1.Configuration,
    signalRService_1.SignalRService
]);
//# sourceMappingURL=boot.js.map