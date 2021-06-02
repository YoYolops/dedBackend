const { Router } = require('express')
import { Request, Response } from 'express'

const routes = Router()

routes.get('/', (req: Request, res: Response) => res.send(`olá ${req}`))

export default routes