module.exports = (sequelize, Datatype) => {
    const Posts = sequelize.define("Posts", {
        title: {
            type: Datatype.STRING,
            allowNull: false,
        },
        postText: {
            type: Datatype.TEXT,
            allowNull: false,
        },
        image: {
            type: Datatype.STRING,
            allowNull: true,
        },
        username: {
            type: Datatype.STRING,
            allowNull: false,
        },
    })

    return Posts;
}