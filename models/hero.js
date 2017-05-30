module.exports= function(sequelize, DataTypes){
	var Hero = sequelize.define("Hero", {
			name: {type: DataTypes.STRING},
			portrait: {type: DataTypes.STRING}
	
	},
	{
      // ROUND We're saying that we want our Round to have Hero
      classMethods: {
        associate: function(models) {
          // An Round (foreignKey) is required or a Hero can't be made
          Hero.belongsTo(models.Round, {
            foreignKey: {
              allowNull: false
            }
          });
        }
      }
    });
	return Hero;
};
