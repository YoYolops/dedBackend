require('dotenv').config()

import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import routes from './routes'

const dndDataProvider = express()

mongoose.connect(
    `mongodb+srv://yoyo:${process.env.MONGO_PASSWORD}@dnddata.bq2ao.mongodb.net/${process.env.MONGO_NAME}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });




dndDataProvider.use(express.json())
dndDataProvider.use(cors())
dndDataProvider.use(routes)

dndDataProvider.listen(process.env.PORT)
