const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Musician = sequelize.define('musician', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: { type: DataTypes.STRING, allowNull: false },
  instrument: { type: DataTypes.STRING }
});

const Leader = sequelize.define('leader', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false }
}); 

const Ensemble = sequelize.define('ensemble', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  leaderId:{type: DataTypes.STRING, allowNull: false},
  img: {type: DataTypes.STRING, allowNull: false},
}); 
    

const Performance = sequelize.define('performance', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  composer: {
    type: DataTypes.STRING,
    allowNull: true, // Allow null if composer is optional
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true, // Allow null if description is optional
  },
  img: {
    type: DataTypes.STRING, 
    allowNull: false, 
  },
}, { 
  timestamps: true, // Adds createdAt and updatedAt fields automatically
  tableName: 'performances', // Ensure this matches your database table name
});

 

const Company = sequelize.define('company', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: { type: DataTypes.STRING, allowNull: false },
  address: { type: DataTypes.STRING },
  wholesale_price :{ type: DataTypes.INTEGER, allowNull: false },
  sold_lastyear:{ type: DataTypes.INTEGER, allowNull: false },
  sold_currentyear:{ type: DataTypes.INTEGER, allowNull: false },
});

const Matrix = sequelize.define('matrix', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  company_id:{ type: DataTypes.INTEGER, allowNull: false },
  record_data:{ type: DataTypes.INTEGER, allowNull: false },
  performance_id:{ type: DataTypes.INTEGER, allowNull: false },
});




const Plate = sequelize.define('plate', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  matrix_id:{ type: DataTypes.INTEGER, allowNull: false },
  performance_id:{ type: DataTypes.INTEGER, allowNull: false },
  retail_price:{ type: DataTypes.INTEGER, allowNull: false },
  plate_output_data:{ type: DataTypes.INTEGER, allowNull: false },
  available_instock:{ type: DataTypes.INTEGER, allowNull: false },
});




 
// Musician.belongsTo(Ensemble);
// Ensemble.hasMany(Musician);

// Perfomance.belongsTo(Company);
// Company.hasMany(Perfomance); 
 
// Matrix.belongsTo(Company);
// Company.hasMany(Matrix); 
// Matrix.belongsTo(Perfomance); 
// Perfomance.hasMany(Matrix);


// Plate.belongsTo(Matrix);
// Matrix.hasMany(Plate);
// Plate.belongsTo(Perfomance);
// Perfomance.hasMany(Plate);




// Ensemble.belongsTo(Leader, { foreignKey: 'leader_id', as: 'leader' });
// Leader.belongsTo(Musician, { foreignKey: 'musician_id', as: 'musician' });



module.exports = {
  Musician,
  Ensemble,
  Performance,
  Matrix,
  Plate,
  Company,
  Leader,
};
