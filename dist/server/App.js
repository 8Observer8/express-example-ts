"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var http = require("http");
var App = /** @class */ (function () {
    function App() {
        var _this = this;
        this._port = process.env.PORT || 3000;
        var app = express();
        app.get("/", function (request, response) {
            response.send("<h2>Hello from Express!");
        });
        var httpServer = http.createServer(app);
        httpServer.listen(this._port, function () {
            console.log("Server started. Port:", _this._port);
        });
    }
    return App;
}());
new App();
//# sourceMappingURL=App.js.map