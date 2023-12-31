import express from 'express'
import {
    getAllHandler,
    getSomeHandler,
    getHeroDetailHandler,
    addHeroHandler,
    deleteHeroHandler,
    editHeroHandler
} from '../controllers/hero.controller.js'

const router = express.Router()

/**
 * @openapi
 * '/api/heroes':
 *  get:
 *     tags:
 *     - Hero
 *     summary: Get all heroes
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  id:
 *                    type: number
 *                  name:
 *                    type: string
 *                  link:
 *                    type: string
 *                  image:
 *                    type: string
 *                  desc:
 *                    type: string
 *       400:
 *         description: Bad request
 */

router.get('/api/heroes', getAllHandler)


/**
 * @openapi
 * '/api/hero/{number}':
 *  get:
 *     tags:
 *     - Hero
 *     summary: Get some heroes
 *     parameters:
 *     - name: number
 *       in: path
 *       description: The number of the hero
 *       required: true
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  id:
 *                    type: number
 *                  name:
 *                    type: string
 *                  link:
 *                    type: string
 *                  image:
 *                    type: string
 *                  desc:
 *                    type: string
 *       400:
 *         description: Bad request
 */

router.get('/api/hero/:number', getSomeHandler)

/**
 * @openapi
 * '/api/heroDetails/{id}':
 *  get:
 *     tags:
 *     - Hero
 *     summary: Get a hero by id
 *     parameters:
 *      - id: id
 *        in: path
 *        description: The unique id of the hero
 *        required: true
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  id:
 *                    type: number
 *                  name:
 *                    type: string
 *                  link:
 *                    type: string
 *                  image:
 *                    type: string
 *                  desc:
 *                    type: string
 *       400:
 *         description: Bad request
 */

router.get('/api/heroDetails/:id', getHeroDetailHandler)


/**
 * @openapi
 * '/api/hero':
 *  post:
 *     tags:
 *     - Hero
 *     summary: Create a hero
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - name
 *            properties:
 *              name:
 *                type: string
 *              link:
 *                type: string
 *              image:
 *                type: string
 *              desc:
 *                type: string
 *     responses:
 *      201:
 *        description: Created
 *      409:
 *        description: Conflict
 *      404:
 *        description: Not Found
 */
router.post('/api/hero', addHeroHandler)

/**
 * @openapi
 * '/api/hero':
 *  put:
 *     tags:
 *     - Hero
 *     summary: Modify a hero
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - id
 *            properties:
 *              name:
 *                type: string
 *              link:
 *                type: string
 *              image:
 *                type: string
 *              desc:
 *                type: string
 *     responses:
 *      200:
 *        description: Modified
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 */
router.put('/api/hero', editHeroHandler)

/**
 * @openapi
 * '/api/hero/{id}':
 *  delete:
 *     tags:
 *     - Hero
 *     summary: Remove hero by id
 *     parameters:
 *      - name: id
 *        in: path
 *        description: The unique id of the hero
 *        required: true
 *     responses:
 *      200:
 *        description: Removed
 *      400:
 *        description: Bad request
 *      404:
 *        description: Not Found
 */
router.delete('/api/hero/:id', deleteHeroHandler)

export default router