"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
    class Page extends Model {
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
    Page.init(
        {
            slug: DataTypes.STRING,
            title: DataTypes.STRING,
            body: DataTypes.TEXT,
            meta: DataTypes.JSON
        },
        {
            sequelize,
            modelName: "Page",
            tableName: "wink_pages",
            underscored: true,
            createdAt: "created_at",
            updatedAt: "updated_at"
        }
    )

    return Page
}
