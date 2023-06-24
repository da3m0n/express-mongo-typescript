"use strict";
// import * as Mongoose from 'mongoose';
// import { IAuthorModel } from '../models/Author';
// import { ConnectOptions } from 'mongoose';
//
// let database: Mongoose.Connection;
//
// export const connect = () => {
//     const uri = 'mongodb+srv://rowan:l34ANABw9UeHY711@cluster0.xlkubny.mongodb.net/';
//     if (database) {
//         return;
//     }
//
//     Mongoose.connect(uri, {
//         useNewUrlParser: true,
//         useFindAndModify: true,
//         useUnifiedTopology: true,
//         useCreateIndex: true
//     } as ConnectOptions);
//
//     database = Mongoose.connection;
//
//     database.once('open', async () => {
//         console.log('Connected to database...');
//     });
//
//     database.on('error', () => {
//         console.log('Error connecting to database');
//     });
// };
//
// export const disconnect = () => {
//     if (!database) {
//         return;
//     }
//     Mongoose.disconnect();
// };
