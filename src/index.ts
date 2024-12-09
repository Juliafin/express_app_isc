import 'dotenv/config'
import { createServer } from './server';

const server = createServer();

// Prevent ports from staying open in case of process hanging
process.on('SIGHUP', () => server.close());
