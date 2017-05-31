module.exports= function(sequelize, DataTypes){
	var Round = sequelize.define("Round", {
			
			Genji: {type:DataTypes.BOOLEAN, default: false},
			McCree: {type:DataTypes.BOOLEAN, default: false},
			Pharah: {type:DataTypes.BOOLEAN, default: false},
			Reaper: {type:DataTypes.BOOLEAN, default: false},
			Soldier76: {type:DataTypes.BOOLEAN, default: false},
			Sombra: {type:DataTypes.BOOLEAN, default: false},
			Tracer: {type:DataTypes.BOOLEAN, default: false},
			Bastion: {type:DataTypes.BOOLEAN, default: false},
			Hanzo: {type:DataTypes.BOOLEAN, default: false},
			Junkrat: {type:DataTypes.BOOLEAN, default: false},
			Mei: {type:DataTypes.BOOLEAN, default: false},
			Torbjorn: {type:DataTypes.BOOLEAN, default: false},
			Widowmaker: {type:DataTypes.BOOLEAN, default: false},
			DVa: {type:DataTypes.BOOLEAN, default: false},
			Orisa: {type:DataTypes.BOOLEAN, default: false},
			Reinhardt: {type:DataTypes.BOOLEAN, default: false},
			Roadhog: {type:DataTypes.BOOLEAN, default: false},
			Winston: {type:DataTypes.BOOLEAN, default: false},
			Zarya: {type:DataTypes.BOOLEAN, default: false},
			Ana: {type:DataTypes.BOOLEAN, default: false},
			Lucio: {type:DataTypes.BOOLEAN, default: false},
			Mercy: {type:DataTypes.BOOLEAN, default: false},
			Symmetra: {type:DataTypes.BOOLEAN, default: false},
			Zenyatta: {type:DataTypes.BOOLEAN, default: false},

			mapType: {type: DataTypes.STRING},
      		mapName: {type: DataTypes.STRING},
			attack: {type:DataTypes.BOOLEAN, default: true},
			victory:  {type:DataTypes.BOOLEAN, default: true}
		});
	return Round;
};
