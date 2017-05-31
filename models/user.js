module.exports = function(sequelize,DataTypes){
	var User = sequelize.define("User",{
		userName:{
			type:DataTypes.STRING,
			allowNull:false,
			validate: {
			len: [2,100]
		}
		},
		email:{
			type: DataTypes.TEXT,
      		allowNull: false,
					validate: {
					isEmail:true,
					len: [2,100]
				}
		},
		password:{
			type: DataTypes.TEXT,
			allowNull:false,
			validate: {
				len: [2,100]
			}
		}
	}
// 				    ,
// 	{ classMethods:{
//         	associate: function(models) {
//             		User.hasMany(models.Round, {
//             		onDelete: "cascade"
//          		});
//         	}
//       	}
// 	}
				   );
		return User;
    };
