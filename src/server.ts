import express from 'express';
import { Server } from 'http';
import { HelloWorldResponse } from './types/responses/helloworld';

export const createServer = (_express: any = express): Server => {
    const app: express.Application = _express();

    // Allow reading json for /api routes
    app.use('/api', express.json());
    app.get('/helloworld', (request: express.Request, response: express.Response<HelloWorldResponse>) => {
        response
            .status(200)
            .json({
                message: 'hello world'
            })
    });

    const port = process.env.SERVER_PORT || 3000;

    return app.listen(port, () => console.log(`Server listening on port ${port}.`))

}