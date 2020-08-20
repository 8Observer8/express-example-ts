import * as express from "express";
import * as http from "http";

// Playground: https://repl.it/@8Observer8/My-First-Express-Server-in-TypeScript

class App
{
    private _port = process.env.PORT || 3000;

    public constructor()
    {
        const app = express();
        app.get("/",
            (request, response) =>
            {
                response.send("<h2>Hello from Express!</h2>");
            });

        const httpServer = http.createServer(app);
        httpServer.listen(this._port,
            () =>
            {
                console.log("Server started. Port:", this._port);
            });
    }
}

new App();
