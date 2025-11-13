module.exports = (sequelize, Datatype) => {
    const Posts = sequelize.define("Posts", {
        title: {
            type: Datatype.STRING,
            allowNull: false,
        },
        postText: {
            type: Datatype.STRING,
            allowNull: false,
        },
        username: {
            type: Datatype.STRING,
            allowNull: false,
        },
    })

    return Posts;
}