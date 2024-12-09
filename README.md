# Express App for ISC

## Built in:

- Node.js
- Express
- Typescript



## Installation and Setup
  1. Install Node.js 22.12.0 (currently LTS as of 12/2024)
  2. Add a `.env` file with `SERVER_PORT=YOUR_PORT` in the project root.
  3. Run `npm install` from the source directory
  4. Production: run `npm run build && npm start`
  5. Development: run `npm run start:dev` to start the server in development mode.

## Testing
  1. All tests (with coverage): run `npm test`
  2. End to End tests: run `npm run test:e2e`
  3. Unit tests: run `npm run test:unit`
  4. To view test coverage, open the `index.html` located in the coverage folder after running tests.