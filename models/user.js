'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Orders, {
      foreignKey: 'uid'
    });
  };
  // sequelize.sync()
  //   .then(() => {
  //     User.create({email:"carlaa@gmail.com"});
  //     User.create({email:"fofay@gmail.com"});
  //     User.create({email:"an@gmail.com"});
  //     User.create({email:"dani@gmail.com"});
  //   });
    
  return User;
};
