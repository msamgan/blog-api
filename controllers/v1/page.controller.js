const { successResponse } = require("../../helpers/methods")
const { publishedPage } = require("../../logic/page.logic")

exports.page = async (req, res) => {
    res.send(successResponse("Page", await publishedPage(req.params.pageSlug)))
}
