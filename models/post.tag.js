"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
    class PostTag extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        // eslint-disable-next-line no-unused-vars
        static associate(models) {
            // define association here
        }
    }
    PostTag.init(
        {
            post_id: DataTypes.STRING,
            tag_id: DataTypes.STRING
        },
        {
            sequelize,
            modelName: "PostTag",
            tableName: "wink_posts_tags",
            underscored: true,
            timestamps: false
        }
    )

    return PostTag
}
