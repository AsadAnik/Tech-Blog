import dotenv from 'dotenv';
import * as path from 'path';
import express from 'express';
import setupMiddlewares from './middleware';
import globalErrorHandler from './error';
import routes from './routes';

// Express App..
const app = express();

// DotEnv Configuration..
dotenv.config();

// Middlewares..
const midddlewares = setupMiddlewares();

// Using Middleware & Route..
app.use(globalErrorHandler);
app.use(midddlewares);
app.use(routes);


// For Production Environment..
if (process.env.NODE_ENV === 'production') {
    // Serve any static files..
    app.use(express.static(path.join(__dirname, "../../client/build")));

    // Handle react routing, return all requests to React App..
    app.get('*', (_req, res) => {
        res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
    });
}

export default app;