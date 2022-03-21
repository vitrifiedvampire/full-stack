module.exports=(sequelize,DataTypes)=>{
    
        const Post= sequelize.define("Post",{
            title:{
                type: DataTypes.STRING,
                allowNull: false,

            },
            PostTexts:{
                type: DataTypes.STRING,
                allowNull: false,
            },
            username:{
            type: DataTypes.STRING,
            allowNull: false,
        },

        });
        return Post;
    }