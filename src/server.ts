import express from 'express';
import * as core from 'express-serve-static-core';
import { Server } from 'http';

export const createServer = (_express: any = express): Server => {
    const app: express.Application = _express();

    // Allow reading json for /api routes
    app.use('/api', express.json());
    
    app.get('/helloworld', (request: express.Request, response: express.Response) => {
        response.json({
            message: 'hello world'
        })
    });

    const port = process.env.SERVER_PORT || 3000;

    return app.listen(port, () => console.log(`Server listening on port ${port}.`))

}