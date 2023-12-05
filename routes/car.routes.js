import express from 'express'
import {
    getCarsHandler,
    getCarHandler,
    addCarHandler,
    deleteCarHandler,
    editCarHandler,
    updateVoteHandler
} from '../controllers/car.controller.js'

const router = express.Router()


/**
 * @openapi
 * '/api/cars':
 *  get:
 *     tags:
 *     - Car
 *     summary: Get all cars
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
 *                  carName:
 *                    type: string
 *                  carImage:
 *                    type: string
 *       400:
 *         description: Bad request
 */

router.get('/api/cars', getCarsHandler)


/**
 * @openapi
 * '/api/car/{id}':
 *  get:
 *     tags:
 *     - Car
 *     summary: Get a car
 *     parameters:
 *      - id: id
 *        in: path
 *        description: The unique id of the car
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
 *                  carName:
 *                    type: string
 *                  carImage:
 *                    type: string
 *       400:
 *         description: Bad request
 */

router.get('/api/car/:id', getCarHandler)

/**
 * @openapi
 * '/api/car':
 *  post:
 *     tags:
 *     - Car
 *     summary: Create a car
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - carName
 *              - carImage
 *            properties:
 *              carName:
 *                type: string
 *                default: New car name
 *              carImage:
 *                type: string
 *                default: New car image path
 *     responses:
 *      201:
 *        description: Created
 *      409:
 *        description: Conflict
 *      404:
 *        description: Not Found
 */
router.post('/api/car', addCarHandler)

/**
 * @openapi
 * '/api/car':
 *  put:
 *     tags:
 *     - Car
 *     summary: Modify a Car
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - id
 *              - carName
 *              - carImage
 *            properties:
 *              id:
 *                type: number
 *                default: 1
 *              carName:
 *                type: string
 *                default: 'Hyndai Santafe'
 *              carImage:
 *                type: string
 *                default: 'image/'
 *     responses:
 *      200:
 *        description: Modified
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 */
router.put('/api/car', editCarHandler)


/**
 * @openapi
 * '/api/car/{id}':
 *  put:
 *     tags:
 *     - Car
 *     summary: Update car's vote
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - vote
 *            properties:
 *              vote:
 *                type: integer
 *                default: 0
 *     responses:
 *      200:
 *        description: Modified
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 */
router.put('/api/car/:id', updateVoteHandler)


/**
 * @openapi
 * '/api/car/{id}':
 *  delete:
 *     tags:
 *     - Car
 *     summary: Remove car by id
 *     parameters:
 *      - name: id
 *        in: path
 *        description: The unique id of the car
 *        required: true
 *     responses:
 *      200:
 *        description: Removed
 *      400:
 *        description: Bad request
 *      404:
 *        description: Not Found
 */
router.delete('/api/car/:id', deleteCarHandler)

export default router