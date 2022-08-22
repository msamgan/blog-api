const { Page } = require("../models")

/**
 * Returns an array of all published pages.
 * @returns {Promise<Page[]>} - An array of all published pages.
 */
exports.publishedPages = async () => {
    return await Page.findAll({
        attributes: ["title", "slug"]
    })
}

/**
 * Finds the page with the given slug.
 * @param {string} pageSlug - the slug of the page to find.
 * @returns {Promise<Page>} - the page with the given slug.
 */
exports.publishedPage = async (pageSlug) => {
    let page = await Page.findOne({
        where: {
            slug: pageSlug
        }
    })

    page.setDataValue("meta", JSON.parse(page.meta))

    return page
}
