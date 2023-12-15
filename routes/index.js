import express from 'express'
import heroRoutes from './hero.routes.js'
import carRoutes from './car.routes.js'
import factRoutes from './fact.routes.js'
import heroCarRoutes from './heroCar.routes.js'

const router = express.Router()

/**
 * @openapi
 * /ping:
 *  get:
 *     tags:
 *     - Ping
 *     description: Returns API operational status
 *     responses:
 *       200:
 *         description: API is  running
 */
router.get('/ping', (req, res) => res.sendStatus(200))

router.use(heroRoutes)

router.use(carRoutes)

router.use(factRoutes)

router.use(heroCarRoutes)

export default router