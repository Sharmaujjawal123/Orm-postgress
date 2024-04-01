const {DataTypes}=require('sequelize');
const sequelize=require('./sequelize');
const Todo=sequelize.define("Todo",{
    todo_id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    // title:{
    //     type:DataTypes.STRING,
    //     allowNull: false
    // },
    description:{
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: false
    }
},{
    tableName: 'todo',
    timestamps:false});
    module.exports=Todo;

