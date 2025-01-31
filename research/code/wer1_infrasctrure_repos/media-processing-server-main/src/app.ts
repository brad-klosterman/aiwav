import Koa from 'koa'
import Router from '@koa/router'
import koaLogger from 'koa-logger'

import { bodyParser } from '@koa/bodyparser'
import { KoaAdapter } from '@bull-board/koa'
import { createBullBoard } from '@bull-board/api'
import { BullAdapter } from '@bull-board/api/bullAdapter'

import { getConfig } from './boilerplate/config'
import { logger } from './boilerplate/createLogger'
import { addSecurityHeaders } from './boilerplate/addSecurityHeaders'
import { identifyAudio, musicRecognitionQueue, getMediaProcessingStatus } from './queues/musicRecognition.queue'

const app = new Koa()
const router = new Router()

const serverAdapter = new KoaAdapter()
serverAdapter.setBasePath('/jobs')
createBullBoard({
  queues: [new BullAdapter(musicRecognitionQueue)],
  serverAdapter,
})

// security headers
addSecurityHeaders(app)

// config
app.context.config = getConfig()

// logger
app.use(koaLogger())
app.context.logger = logger

// bodyparser
app.use(bodyParser())

// router
app.use(router.routes())
app.use(router.allowedMethods())

// bull-board
app.use(serverAdapter.registerPlugin())

// routes
router.post('/identify-audio', identifyAudio)
router.get('/audio-processing-status', getMediaProcessingStatus)

export default app
