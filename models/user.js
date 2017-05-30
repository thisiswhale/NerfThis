
module.exports = function(sequelize,DataTypes){
	var User = sequelize.define("User",{
		userName:{
			type:DataTypes.STRING,
			allowNull:false
		},
		email:{
			type: DataTypes.TEXT,
      		allowNull: false
		},
		password:{
			type: DataTypes.TEXT,
			allowNull:false
		}

	});
	return User;
}

