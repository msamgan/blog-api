"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
    class Tag extends Model {
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
    Tag.init(
        {
            slug: DataTypes.STRING,
            name: DataTypes.STRING,
            meta: DataTypes.JSON
        },
        {
            sequelize,
            modelName: "Tag",
            tableName: "wink_tags",
            underscored: true,
            createdAt: "created_at",
            updatedAt: "updated_at"
        }
    )

    return Tag
}
