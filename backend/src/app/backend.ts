import express, { Application } from 'express'

import components from "./components";
import cors from "cors";
import dotenv from "dotenv";
import morgan from 'morgan'
import path from 'path';

export class App {
    app: Application;

    constructor(
        private port?: number | string
    ) {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
        this.setFrontEnd();
    }

    private settings() {
        dotenv.config();
        this.app.set('port', this.port || process.env.PORT || 3000);
    }

    private middlewares() {
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(cors());
    }

    private routes() {
        this.app.use('/api', ...components);
    }

    private setFrontEnd() {

        //Directorio publico
        this.app.use(express.static('src/app/public'));
        // todas las rutas
        this.app.all( '*', (req, res) => {
            res.sendFile( path.resolve( __dirname, 'public/index.html'));
        });

    }

    async listen(): Promise<void> {
        await this.app.listen(this.app.get('port'));
        console.log('Server on port', this.app.get('port'));
    }

}