const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('tiny'))

const PORT= 3001

app.listen(PORT, () => {
    console.log("Server running on port", PORT)
})