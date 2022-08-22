const { successResponse } = require("../../helpers/methods")
const {
    publishedPosts,
    publishedPostsByTag,
    publishedPost,
    publishedPostsByTags
} = require("../../logic/post.logic")

/**
 * Returns a list of all published posts.
 * @returns {Promise<Post[]>}
 */
exports.index = async (req, res) => {
    res.send(successResponse("Post list", await publishedPosts()))
}

/**
 * Returns a list of posts that are tagged with the given tag slug.
 * @param {string} tagSlug - the tag slug to search for.
 * @returns {Promise<Post[]>} - a list of posts that are tagged with the given tag slug.
 */
exports.tag = async (req, res) => {
    res.send(successResponse("Post list by tag", await publishedPostsByTag(req.params.tagSlug)))
}

exports.tags = async (req, res) => {
    res.send(successResponse("Post list by tags", await publishedPostsByTags(req.query.tags)))
}

/**
 * A function that takes in a post slug and returns the post object.
 * @param {string} postSlug - the slug of the post to return.
 * @returns {Promise<Post>} - the post object.
 */
exports.post = async (req, res) => {
    res.send(successResponse("Post", await publishedPost(req.params.postSlug)))
}
