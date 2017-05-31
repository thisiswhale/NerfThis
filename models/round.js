module.exports= function(sequelize, DataTypes){
	var Round = sequelize.define("Round", {
			
			Genji: {type:DataTypes.BOOLEAN, defaultValue: false},
			McCree: {type:DataTypes.BOOLEAN, defaultValue: false},
			Pharah: {type:DataTypes.BOOLEAN, defaultValue: false},
			Reaper: {type:DataTypes.BOOLEAN, defaultValue: false},
			Soldier76: {type:DataTypes.BOOLEAN, defaultValue: false},
			Sombra: {type:DataTypes.BOOLEAN, defaultValue: false},
			Tracer: {type:DataTypes.BOOLEAN, defaultValue: false},
			Bastion: {type:DataTypes.BOOLEAN, defaultValue: false},
			Hanzo: {type:DataTypes.BOOLEAN, defaultValue: false},
			Junkrat: {type:DataTypes.BOOLEAN, defaultValue: false},
			Mei: {type:DataTypes.BOOLEAN, defaultValue: false},
			Torbjorn: {type:DataTypes.BOOLEAN, defaultValue: false},
			Widowmaker: {type:DataTypes.BOOLEAN, defaultValue: false},
			DVa: {type:DataTypes.BOOLEAN, defaultValue: false},
			Orisa: {type:DataTypes.BOOLEAN, defaultValue: false},
			Reinhardt: {type:DataTypes.BOOLEAN, defaultValue: false},
			Roadhog: {type:DataTypes.BOOLEAN, defaultValue: false},
			Winston: {type:DataTypes.BOOLEAN, defaultValue: false},
			Zarya: {type:DataTypes.BOOLEAN, defaultValue: false},
			Ana: {type:DataTypes.BOOLEAN, defaultValue: false},
			Lucio: {type:DataTypes.BOOLEAN, defaultValue: false},
			Mercy: {type:DataTypes.BOOLEAN, defaultValue: false},
			Symmetra: {type:DataTypes.BOOLEAN, defaultValue: false},
			Zenyatta: {type:DataTypes.BOOLEAN, defaultValue: false},

			mapType: {type: DataTypes.STRING,
				  defaultValue: "NA"},
      			mapName: {type: DataTypes.STRING,
				 defaultValue: "NA"},
		
			attack: {type:DataTypes.BOOLEAN, defaultValue: true},
			victory:  {type:DataTypes.BOOLEAN, defaultValue: true}
		},
		{
      // We're saying that we want our User to have Round
    	classMethods: {
        	associate: function(models) {
          // An User (foreignKey) is required or a Round can't be made
          	Round.belongsTo(models.User, {
            		foreignKey: {
              			allowNull: true
            		}
          	});
        	}
      	}
    		}
   );
	return Round;
};
