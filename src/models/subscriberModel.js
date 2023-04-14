module.exports = (sequelize, DataTypes)  => {

    const Subscriber = sequelize.define("subscriber", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        subscriberName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        emailAddress: {
            type: DataTypes.STRING,
            allowNull: true
        },
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: true
        },
        resident: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }},{
            timestamps: false

    })

    return Subscriber

}
