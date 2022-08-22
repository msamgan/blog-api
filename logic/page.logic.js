const { Page } = require("../models")

/**
 * Finds the page with the given slug.           
 * @param {string} pageSlug - the slug of the page to find.           
 * @returns {Promise<Page>} - the page with the given slug.           
 */
exports.publishedPage = async (pageSlug) => {
    return await Page.findOne({
        where: {
            slug: pageSlug
        }
    })
}
