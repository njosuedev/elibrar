module.exports = (sequelize, Datatype) => {
    const Author = sequelize.define("Author", {
        names: {
            type: Datatype.STRING,
            allowNull: false
        },
        profile: {
            type: Datatype.STRING,
            allowNull: false
        }
    });

    return Author;
}