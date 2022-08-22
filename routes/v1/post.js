const express = require("express")
const router = express.Router()

const PostController = require("../../controllers/v1/post.controller")

router.get("/", PostController.index)
router.get("/tag/:tagSlug", PostController.tag)
router.get("/tags", PostController.tags)
router.get("/post/:postSlug", PostController.post)

module.exports = router
