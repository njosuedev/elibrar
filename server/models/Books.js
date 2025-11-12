module.exports = (sequelize, Datatype) => {
    const Books = sequelize.define("Books", {
        title: {
            type: Datatype.STRING,
            allowNull: false,
        },
        description: {
            type: Datatype.STRING,
            allowNull: false,
        },
        author: {
            type: Datatype.STRING,
            allowNull: false,
        },
        cover: {
            type: Datatype.STRING,
            allowNull: false,
        }
    })

    return Books;
}