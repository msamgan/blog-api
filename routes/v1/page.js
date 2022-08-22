const express = require("express")
const router = express.Router()

const PageController = require("../../controllers/v1/page.controller")

router.get("/:pageSlug", PageController.page)

module.exports = router
