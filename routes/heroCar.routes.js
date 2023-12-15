import express from 'express'
import {
    getAllHandler,
    getSomeHandler,
    getHeroCarDetailHandler,
    addHeroCarHandler,
    deleteHeroCarHandler,
    editHeroCarHandler
} from '../controllers/heroCar.controller.js'

const router = express.Router()

/**
 * @openapi
 * '/api/heroCars':
 *  get:
 *     tags:
 *     - Hero playing with Cars
 *     summary: Get all hero playing with car
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
 *                  carId:
 *                    type: number
 *                  relation:
 *                    type: string
 *       400:
 *         description: Bad request
 */

router.get('/api/heroCars', getAllHandler)


/**
 * @openapi
 * '/api/heroCar/{number}':
 *  get:
 *     tags:
 *     - Hero playing with Cars
 *     summary: View some records
 *     parameters:
 *     - name: number
 *       in: path
 *       description: The number of records
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
 *                  carId:
 *                    type: number
 *                  relation:
 *                    type: string
 *       400:
 *         description: Bad request
 */

router.get('/api/heroCar/:number', getSomeHandler)

/**
 * @openapi
 * '/api/heroCarDetail/{id}':
 *  get:
 *     tags:
 *     - Hero playing with Cars
 *     summary: Get a record's details
 *     parameters:
 *      - id: id
 *        in: path
 *        description: The unique id 
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
 *                  carId:
 *                    type: number
 *                  relation:
 *                    type: string
 *       400:
 *         description: Bad request
 */

router.get('/api/heroCarDetail/:id', getHeroCarDetailHandler)


/**
 * @openapi
 * '/api/heroCar':
 *  post:
 *     tags:
 *     - Hero playing with Cars
 *     summary: Create a record, mapping hero - car & their relation
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - heroId
 *              - carId
 *              - relation
 *            properties:
 *              heroId:
 *                type: number
 *              carId:
 *                type: number
 *              relation:
 *                type: string
 *     responses:
 *      201:
 *        description: Created
 *      409:
 *        description: Conflict
 *      404:
 *        description: Not Found
 */
router.post('/api/heroCar', addHeroCarHandler)

/**
 * @openapi
 * '/api/heroCar':
 *  put:
 *     tags:
 *     - Hero playing with Cars
 *     summary: Modify a record
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - id
 *            properties:
 *              id:
 *                type: number
 *              heroId:
 *                type: number
 *              carId:
 *                type: number
 *              relation:
 *                type: string
 *     responses:
 *      200:
 *        description: Modified
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 */
router.put('/api/heroCar', editHeroCarHandler)

/**
 * @openapi
 * '/api/heroCar/{id}':
 *  delete:
 *     tags:
 *     - Hero playing with Cars
 *     summary: Remove a record by it's id
 *     parameters:
 *      - name: id
 *        in: path
 *        description: The unique id of the record
 *        required: true
 *     responses:
 *      200:
 *        description: Removed
 *      400:
 *        description: Bad request
 *      404:
 *        description: Not Found
 */
router.delete('/api/heroCar/:id', deleteHeroCarHandler)

export default router