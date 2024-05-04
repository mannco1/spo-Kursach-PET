const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Musician = sequelize.define('musician', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: { type: DataTypes.STRING, allowNull: false },
  instrument: { type: DataTypes.STRING }
});

const Ensemble = sequelize.define('ensemble', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: { type: DataTypes.STRING, allowNull: false },
  type: { type: DataTypes.STRING }
});


const Composition = sequelize.define('composition', { 
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  title: { type: DataTypes.STRING, allowNull: false },
  composer: { type: DataTypes.STRING }
});


const Record = sequelize.define('record', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  stickerNumber: { type: DataTypes.INTEGER, allowNull: false,  },
  releaseDate: { type: DataTypes.DATE, allowNull: false },
  wholesalePrice: { type: DataTypes.FLOAT, allowNull: false },
  retailPrice: { type: DataTypes.FLOAT, allowNull: false },
  img: {type: DataTypes.STRING, allowNull: false},
  
});

  



const Company = sequelize.define('company', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: { type: DataTypes.STRING, allowNull: false },
  address: { type: DataTypes.STRING }
});


Musician.belongsTo(Ensemble);
Ensemble.hasMany(Musician);

Composition.belongsToMany(Record, { through: 'CompositionRecord' });
Record.belongsToMany(Composition, { through: 'CompositionRecord' });

Record.belongsTo(Company);
Company.hasMany(Record);


module.exports = {
  Musician,
  Ensemble,
  Composition,
  Record,
  Company
};
