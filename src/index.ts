import 'dotenv/config'
import { createServer } from './server';

const server = createServer();

// Prevent ports from staying open in case of process not properly closing
process.on('SIGHUP', () => server.close());
