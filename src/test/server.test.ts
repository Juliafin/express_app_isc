import { createServer } from "../server";
import { Server } from 'http';

describe('createServer', () => {
    let server: any;
    afterAll((done) => {
        server.close(done);
    });

    it('should return an instance of an express server', () => {
        server = createServer();
        expect(server).toBeInstanceOf(Server);
    });
})