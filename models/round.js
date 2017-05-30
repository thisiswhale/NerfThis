module.exports= function(sequelize, DataType){
	var Rounnd = sequelize.define("Round", {
		round: {
			Genji: DataTypes.BOOLEAN DEFAULT false,
			McCree: DataTypes.BOOLEAN DEFAULT false,
			Pharah: DataTypes.BOOLEAN DEFAULT false,
			Reaper: DataTypes.BOOLEAN DEFAULT false,
			Soldier76: DataTypes.BOOLEAN DEFAULT false,
			Sombra: DataTypes.BOOLEAN DEFAULT false,
			Tracer: DataTypes.BOOLEAN DEFAULT false,
			Bastion: DataTypes.BOOLEAN DEFAULT false,
			Hanzo: DataTypes.BOOLEAN DEFAULT false,
			Junkrat: DataTypes.BOOLEAN DEFAULT false,
			Mei: DataTypes.BOOLEAN DEFAULT false,
			Torbjorn: DataTypes.BOOLEAN DEFAULT false,
			Widowmaker: DataTypes.BOOLEAN DEFAULT false,
			DVa: DataTypes.BOOLEAN DEFAULT false,
			Orisa: DataTypes.BOOLEAN DEFAULT false,
			Reinhardt: DataTypes.BOOLEAN DEFAULT false,
			Roadhog: DataTypes.BOOLEAN DEFAULT false,
			Winston: DataTypes.BOOLEAN DEFAULT false,
			Zarya: DataTypes.BOOLEAN DEFAULT false,
			Ana: DataTypes.BOOLEAN DEFAULT false,
			Lucio: DataTypes.BOOLEAN DEFAULT false,
			Mercy: DataTypes.BOOLEAN DEFAULT false,
			Symmetra: DataTypes.BOOLEAN DEFAULT false,
			Zenyatta: DataTypes.BOOLEAN DEFAULT false,

			attack: DataTypes.BOOLEAN DEFAULT true,

			win: DataTypes.BOOLEAN DEFAULT true	
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
	return User;
};