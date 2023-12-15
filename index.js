import express from 'express'
import router from './routes/index.js'
import swaggerDocs from './swagger.js'
import cors from 'cors'
import morgan from 'morgan'

const requestTime = function (req, res, next) {
    req.requestTime = Date.now()
    console.log(new Date(req.requestTime))
    next()
}

const app = express()
const port = 3232

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(requestTime)

app.use(express.static('resource'));
app.use('/images', express.static('resource'));

app.use(router)

app.listen(port, () => {
    console.log(`Backend app listening at http://localhost:${port}`)
    swaggerDocs(app, port)
})