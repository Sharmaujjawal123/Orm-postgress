const { Sequelize } = require("sequelize")

const sequelize=new Sequelize('pertodo','postgres','Uwala@99310',{
    host: 'localhost',
    dialect:"postgres",
});
module.exports=sequelize;