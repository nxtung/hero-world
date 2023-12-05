import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Base Backend API',
            description: 'API for backend ',
            version: '1.0.0',
        },
    },
    explorer: true,
    customCss: '.swagger-ui .topbar { display: none }',
    // Tìm các chỉ đẫn chi tiết về các API tại các file khác, dựa trên specs của openApi 3.0.0
    apis: ['./routes/*.js'],
}

const swaggerSpec = swaggerJsdoc(options)

function swaggerDocs(app, port) {
    // Trang này là trang chủ xem các API  
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

    // Dưới dạng json
    app.get('/docs.json', (req, res) => {
        res.setHeader('Content-Type', 'application/json')
        res.send(swaggerSpec)
    })
}

export default swaggerDocs