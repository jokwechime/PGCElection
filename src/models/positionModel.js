module.exports = (sequelize, DataTypes) => {

    const Position = sequelize.define("position", {
        id: {
            type: DataTypes.INTEGER,
            aallowNull: false,
            primaryKey: true
        },
        PositionName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ForResidentsOnly: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },

    })

    return Position

}
  