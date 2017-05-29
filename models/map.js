module.exports= function(sequelize, DataType){
	var Map = sequelize.define("Map", {
		map: {
			type: DataTypes.STRING,
			name: DataTypes.STRING	
		}
	},
	    {
      // ROUTES We're saying that we want our Round to have Map
      classMethods: {
        associate: function(models) {
          // An Round (foreignKey) is required or a Map can't be made
          Map.belongsTo(models.Round, {
            foreignKey: {
              allowNull: false
            }
          });
        }
      }
    });
	return Map;
};