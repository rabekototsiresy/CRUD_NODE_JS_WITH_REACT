const { db,Sequelize } = require('../db')

const Music = db.define('musics',{
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },

  title: Sequelize.STRING(50),

  description: Sequelize.STRING(100)
  
})

module.exports = Music;