require("dotenv").config()
require("express-async-errors")

const accessLogMiddleware = require("./middlewares/logger.middleware")
const routes = require("./routes/api")
const v1PostRoutes = require("./routes/v1/post")
const v1PageRoutes = require("./routes/v1/page")

const express = require("express")
const app = express()
const cors = require("cors")

app.use(cors())

app.use(express.json())

// Req and Res logger.
app.use(accessLogMiddleware)

app.use("/", routes)
app.use("/v1/posts", v1PostRoutes)
app.use("/v1/pages", v1PageRoutes)

module.exports = app
