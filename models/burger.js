module.exports = function (sequelize, DataTypes) {
    let Burger = sequelize.define("Burger", {
        burger_name: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true,
                len: [1]
            }
        },
        devoured: {
            type: DataTypes.BOOLEAN,

            defaultValue: false,
            allowNull: false
        }
    })
    
    return Burger
}