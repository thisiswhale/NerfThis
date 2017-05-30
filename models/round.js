module.exports= function(sequelize, DataType){
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

			attack: {type:DataTypes.BOOLEAN, default: true},

			victory:  {type:DataTypes.BOOLEAN, default: true},
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
    },
            {
      // MAPS We're saying that we want our Round to have Map
      classMethods: {
        associate: function(models) {

          Round.hasMany(models.Map, {
            onDelete: "cascade"
          });
        }
      }
    },
    {
      // HEROES We're saying that we want our Round to have Hero
      classMethods: {
        associate: function(models) {
          // Associating Round with Hero
          // When an Round is deleted, also delete any associated Hero
          Round.hasMany(models.Hero, {
            onDelete: "cascade"
          });
        }
      }
    }

	);
	return Round;
};
