module.exports = (sequelize, dataTypes) => {
  const Genre = sequelize.define("Genres", {
    id: {
      type: dataTypes.INTEGER(10),
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },

    name: {
      type: dataTypes.STRING(100),
      allowNull: false,
    },

    ranking: {
      type: dataTypes.DECIMAL(3, 1),
      allowNull: false,
    },

    active: {
      type: dataTypes.TINYINT(1),
      allowNull: false,
      default: 1,
    },
  }, {
    tableName: "genres",
    createdAt: "created_at",
    updatedAt: "updated_at",
  })

  return Genre
}