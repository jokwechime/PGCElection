module.exports = (sequelize, DataTypes) => {

    const Voting = sequelize.define("voting", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        subscriberID: {
            type: DataTypes.INTEGER,
            allowNull: false,
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
        electionYear: {
            type: DataTypes.STRING,
            allowNull: false
        },
        president: {
            type: DataTypes.STRING,
            allowNull: true
        },
        vicePresident: {
            type: DataTypes.STRING,
            allowNull: true
        },
        secretary: {
            type: DataTypes.STRING,
            allowNull: true
        },
        treasurer: {
            type: DataTypes.STRING,
            allowNull: true
        },
        SocialSecretary: {
            type: DataTypes.STRING,
            allowNull: true
        }},{
            timestamps: false

    })

    return Voting

}

  