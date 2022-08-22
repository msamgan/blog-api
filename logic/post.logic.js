const { Post, Tag } = require("../models")

/**
 * Returns all published posts.
 * @param {string} [postSlug=null] - the slug of the post to return.
 * @returns {Promise<Post[]>} - A promise that resolves to an array of posts.
 */
exports.publishedPosts = async (postSlug = null) => {
    let tagQuery = {
        model: Tag,
        attributes: ["name", "slug"],
        through: {
            attributes: []
        }
    }

    if (postSlug) {
        tagQuery.where = { slug: postSlug }
    }

    return await Post.findAll({
        where: {
            published: true
        },
        include: [tagQuery],
        order: [["publish_date", "DESC"]]
    })
}

/**
 * Returns a list of posts that have been published with the given tag.
 * @param {string} tagSlug - the tag to search for.
 * @returns {Promise<Post[]>} - a list of posts that have been published with the given tag.
 */
exports.publishedPostsByTag = async (tagSlug) => {
    return await this.publishedPosts(tagSlug)
}

/**
 * Returns a list of posts that are tagged with the given tags.
 * @param {string} tagSlugs - A comma separated list of tag slugs.
 * @returns {Promise<Post[]>} A list of posts that are tagged with the given tags.
 */
exports.publishedPostsByTags = async (tagSlugs) => {
    return await this.publishedPosts(tagSlugs.split(","))
}

/**
 * Returns a post object with the given slug.
 * @param {string} postSlug - the slug of the post to return
 * @returns {Promise<Post>} - the post object with the given slug.
 */
exports.publishedPost = async (postSlug) => {
    let post = await Post.findOne({
        where: {
            slug: postSlug,
            published: true
        },
        include: [
            {
                model: Tag,
                attributes: ["name", "slug"],
                through: {
                    attributes: []
                }
            }
        ]
    })

    post.setDataValue("meta", JSON.parse(post.meta))

    return post
}
