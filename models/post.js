"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
    class Post extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Post.belongsToMany(models.Tag, {
                through: "PostTag",
                foreignKey: "post_id",
                otherKey: "tag_id"
            })
        }
    }
    Post.init(
        {
            slug: DataTypes.STRING,
            title: DataTypes.STRING,
            excerpt: DataTypes.STRING,
            body: DataTypes.STRING,
            published: DataTypes.BOOLEAN,
            publish_date: DataTypes.DATE,
            featured_image: DataTypes.STRING,
            updated_at: DataTypes.DATE,
            meta: DataTypes.JSON,
            page_view: DataTypes.INTEGER
        },
        {
            sequelize,
            modelName: "Post",
            tableName: "wink_posts",
            underscored: true,
            createdAt: "created_at",
            updatedAt: "updated_at"
        }
    )

    return Post
}
