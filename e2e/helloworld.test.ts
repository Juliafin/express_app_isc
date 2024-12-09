import supertest from "supertest";
import { createServer } from "../src/server";
import { Server } from 'http';
import {StatusCodes} from 'http-status-codes'


describe('GET /helloworld', () => {
    let app: Server;
    let request: supertest.Agent;
    beforeAll(() => {
        app = createServer();
        request = supertest.agent(app);
    })
    afterAll((done) => {
        app.close(done);
    })
    it('should return the correct message and status', async() => {
        const response = await request.get('/helloworld');
        expect(response.status).toBe(StatusCodes.OK);

    });
});