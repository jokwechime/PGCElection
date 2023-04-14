module.exports = (sequelize, DataTypes)  => {

    const VotersList = sequelize.define("votersList", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        nominee: {
            type: DataTypes.STRING,
            allowNull: false
        },
        position: {
            type: DataTypes.STRING,
            allowNull: true
        },
        electionYear: {
            type: DataTypes.STRING,
            allowNull: true
        },
        obtainedVotes: {
            type: DataTypes.INTEGER,
            allowNull: true,
            default:0
        },
        elected: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            default:false
        }},{
            timestamps: false

    })

    return VotersList

}
