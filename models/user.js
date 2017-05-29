module.exports= function(sequelize, DataType){
	var User = sequelize.define("User", {
		user: {
			name: DataTypes.STRING,
			password: DataTypes.STRING		
		}
	},
	{
      // We're saying that we want our User to have Round
      classMethods: {
        associate: function(models) {
          // An User (foreignKey) is required or a Round can't be made
          Round.belongsTo(models.User, {
            foreignKey: {
              allowNull: false
            }
          });
        }
      }
    }

	);
	return User;
};