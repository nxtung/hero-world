import express from 'express'
import {
    getAllHandler,
    getSomeHandler,
    getFactHandler,
    addFactHandler,
    deleteFactHandler,
    editFactHandler,
    getHeroFactHandler
} from '../controllers/fact.controller.js'

const router = express.Router()

/**
 * @openapi
 * '/api/facts':
 *  get:
 *     tags:
 *     - Fact
 *     summary: Get all heroe's facts
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
 *                  heroId:
 *                    type: number
 *                  name:
 *                    type: string
 *                  value:
 *                    type: string
 *       400:
 *         description: Bad request
 */

router.get('/api/facts', getAllHandler)


/**
 * @openapi
 * '/api/fact/{number}':
 *  get:
 *     tags:
 *     - Fact
 *     summary: Get some hero's facts
 *     parameters:
 *     - name: number
 *       in: path
 *       description: The number of the hero's fact
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
 *                  heroId:
 *                    type: number
 *                  name:
 *                    type: string
 *                  value:
 *                    type: string
 *       400:
 *         description: Bad request
 */

router.get('/api/fact/:number', getSomeHandler)

/**
 * @openapi
 * '/api/factDetails/{id}':
 *  get:
 *     tags:
 *     - Fact
 *     summary: Get a fact by fact's id
 *     parameters:
 *      - id: id
 *        in: path
 *        description: The unique id of the hero's fact
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
 *                  heroId:
 *                    type: number
 *                  name:
 *                    type: string
 *                  value:
 *                    type: string
 *       400:
 *         description: Bad request
 */

router.get('/api/factDetails/:id', getFactHandler)


/**
 * @openapi
 * '/api/heroFact/{heroId}':
 *  get:
 *     tags:
 *     - Fact
 *     summary: Get a fact by hero's id
 *     parameters:
 *      - heroId: heroId
 *        in: path
 *        description: The unique id of the hero's id
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
 *                  heroId:
 *                    type: number
 *                  name:
 *                    type: string
 *                  value:
 *                    type: string
 *       400:
 *         description: Bad request
 */

router.get('/api/heroFact/:heroId', getHeroFactHandler)


/**
 * @openapi
 * '/api/fact':
 *  post:
 *     tags:
 *     - Fact
 *     summary: Create a hero's fact
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - heroId
 *              - name
 *              - value
 *            properties:
 *              heroId:
 *                type: number
 *              name:
 *                type: string
 *              value:
 *                type: string
 *     responses:
 *      201:
 *        description: Created
 *      409:
 *        description: Conflict
 *      404:
 *        description: Not Found
 */
router.post('/api/fact', addFactHandler)

/**
 * @openapi
 * '/api/fact':
 *  put:
 *     tags:
 *     - Fact
 *     summary: Modify a hero's fact
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - id
 *            properties:
 *              heroId:
 *                type: number
 *              name:
 *                type: string
 *              value:
 *                type: string
 *     responses:
 *      200:
 *        description: Modified
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 */
router.put('/api/fact', editFactHandler)

/**
 * @openapi
 * '/api/fact/{id}':
 *  delete:
 *     tags:
 *     - Fact
 *     summary: Remove fact by id
 *     parameters:
 *      - name: id
 *        in: path
 *        description: The unique id of the hero's fact
 *        required: true
 *     responses:
 *      200:
 *        description: Removed
 *      400:
 *        description: Bad request
 *      404:
 *        description: Not Found
 */
router.delete('/api/fact/:id', deleteFactHandler)

export default router