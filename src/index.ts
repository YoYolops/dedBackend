require('dotenv').config()

import express, { Response } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import routes from './routes'

const dndDataProvider = express()

dndDataProvider.use(express.json())
dndDataProvider.use(cors())
dndDataProvider.use(routes)

dndDataProvider.listen(process.env.PORT)
