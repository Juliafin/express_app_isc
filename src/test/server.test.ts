import { createServer } from "../server";
import { Server } from 'http';

describe('createServer', () => {
    let server: any;
    afterEach(() => {
        if (server) {
            server.close();
        }
    });

    it('should return an instance of an express server', () => {
        server = createServer();
        expect(server).toBeInstanceOf(Server);
    });
    it('should configure the server properly', () => {
        const mockUse = jest.fn();
        const mockGet = jest.fn();
        const mockListen = jest.fn().mockReturnValue({ close: jest.fn()});
        const mockExpress: any = jest.fn().mockImplementation(() => {
            return {
                get: mockGet,
                use: mockUse,
                listen: mockListen
            }
        });
        mockExpress.json = jest.fn();
        createServer(mockExpress);

        expect(mockUse).toHaveBeenCalled();
        expect(mockGet).toHaveBeenCalled();
        expect(mockListen).toHaveBeenCalled();
    });
})