import express from 'express';
import http from 'http';
import mongoose, { mongo } from 'mongoose';
import { config } from './config/config';
import Logging from './library/logging';
import authorRoutes from './routes/Author';
import bookRoutes from './routes/Book';

const router = express();

// Connect to mongo
mongoose
    .connect(config.mongo.url, { retryWrites: true, w: 'majority' })
    .then(() => {
        Logging.info('Connected to MongoDB...');
        startServer();
    })
    .catch((error) => {
        Logging.error('Unable to connect..');
        Logging.error(error);
    });

// mongoose.connection.on('error', (error: Error) => console.log(error));

const startServer = () => {
    router.use((req, res, next) => {
        // Logging.info(`Incoming -> Method: [${req.method}] - Url: [${req.url}] - IP: [${req.socket.remoteAddress}]`);
        //
        // res.on('finish', () => {
        //     Logging.info(`Incoming -> Method: [${req.method}] - Url: [${req.url}] - IP: [${req.socket.remoteAddress}] - Status: [${res.statusCode}]`);
        // });

        Logging.info(`Incomming - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);

        res.on('finish', () => {
            /** Log the res */
            Logging.info(`Result - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}] - STATUS: [${res.statusCode}]`);
        });
        next();
    });

    router.use(express.urlencoded({ extended: true }));
    router.use(express.json());

    /** Rules of API */
    // router.use((req, res, next) => {
    //     res.header('Access-Control-Allow-Origin', '*');
    //     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    //
    //     if (req.method == 'OPTIONS') {
    //         res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    //         return res.status(200).json({});
    //     }
    //
    //     next();
    // });

    /** Routes */

    router.use('/authors', authorRoutes);
    router.use('/books', bookRoutes);
    /** Healthcheck */
    // router.get('/ping', (req, res, next) => {
    //     res.status(200).json({ message: 'pong' });
    // });

    /** Error Handling */
    // router.use((req, res, next) => {
    //     const error = new Error('not found');
    //     Logging.error(error);
    //
    //     return res.status(404).json({ message: error.message });
    // });

    http.createServer(router).listen(config.server.port, () => {
        Logging.info(`Server is running on port ${config.server.port}`);
    });
};
