"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("./config/config");
const logging_1 = __importDefault(require("./library/logging"));
const Author_1 = __importDefault(require("./routes/Author"));
const router = (0, express_1.default)();
// Connect to mongo
mongoose_1.default
    .connect(config_1.config.mongo.url, { retryWrites: true, w: 'majority' })
    .then(() => {
    logging_1.default.info('Connected to MongoDB...');
    startServer();
})
    .catch((error) => {
    // Logging.error('xxx', config.mongo.user, '->', config.mongo.url);
    logging_1.default.error('Unable to connect..');
    logging_1.default.error(error);
});
const startServer = () => {
    router.use((req, res, next) => {
        // Logging.info(`Incoming -> Method: [${req.method}] - Url: [${req.url}] - IP: [${req.socket.remoteAddress}]`);
        //
        // res.on('finish', () => {
        //     Logging.info(`Incoming -> Method: [${req.method}] - Url: [${req.url}] - IP: [${req.socket.remoteAddress}] - Status: [${res.statusCode}]`);
        // });
        logging_1.default.info(`Incomming - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);
        res.on('finish', () => {
            /** Log the res */
            logging_1.default.info(`Result - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}] - STATUS: [${res.statusCode}]`);
        });
        next();
    });
    router.use(express_1.default.urlencoded({ extended: true }));
    router.use(express_1.default.json());
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
    router.use('/authors', Author_1.default);
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
    http_1.default.createServer(router).listen(config_1.config.server.port, () => {
        logging_1.default.info(`Server is running on port ${config_1.config.server.port}`);
    });
};
