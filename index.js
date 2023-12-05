import express from 'express'
import router from './routes/index.js'
import swaggerDocs from './swagger.js'
import cors from 'cors'

const myLogger = function (req, res, next) {
    console.log('LOGGED')
    next()
}

const requestTime = function (req, res, next) {
    req.requestTime = Date.now()
    console.log(req.requestTime)
    next()
}

const app = express()
const port = 3232

app.use(cors())

app.use(express.json())
app.use(requestTime)
app.use(router)

app.listen(port, () => {
    console.log(`Backend app listening at http://localhost:${port}`)
    swaggerDocs(app, port)
})


