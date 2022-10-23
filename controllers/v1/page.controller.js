const { successResponse } = require("../../helpers/methods")
const { publishedPage, publishedPages } = require("../../logic/page.logic")

/**
 * Returns a list of all the published pages.
 * @returns {Promise<Page[]>} - A list of all the published pages.
 */
exports.index = async (req, res) => {
    res.send(successResponse("Page", await publishedPages()))
}

/**
 * A function that returns a page from the database.
 * @param {string} pageSlug - the slug of the page to return
 * @returns {Promise<Page>} - the page with the given slug
 */
exports.page = async (req, res) => {
    res.send(successResponse("Page", await publishedPage(req.params.pageSlug)))
}
