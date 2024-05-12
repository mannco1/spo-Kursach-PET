const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Musician = sequelize.define('musician', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: { type: DataTypes.STRING, allowNull: false },
  instrument: { type: DataTypes.STRING }
});

const Leader = sequelize.define('leader', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: { type: DataTypes.STRING, allowNull: false },
  
  
});
 

const Ensemble = sequelize.define('ensemble', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: { type: DataTypes.STRING, allowNull: false },
  leader_id: { type: DataTypes.INTEGER, allowNull: true },
  
});


const Perfomance = sequelize.define('perfomance', { 
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  title: { type: DataTypes.STRING, allowNull: false },
  composer: { type: DataTypes.STRING },
  img: {type: DataTypes.STRING, allowNull: false},
  
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


Musician.belongsTo(Ensemble);
Ensemble.hasMany(Musician);

// Лидеры (Leader) относятся к ансамблям (Ensemble)



// Выступления (Perfomance) относятся к компаниям (Company)
Perfomance.belongsTo(Company);
Company.hasMany(Perfomance);
 
// Матрицы (Matrix) связаны с компаниями (Company) и выступлениями (Perfomance)
Matrix.belongsTo(Company);
Company.hasMany(Matrix);
Matrix.belongsTo(Perfomance);
Perfomance.hasMany(Matrix);
 
// Пластинки (Plate) связаны с матрицами (Matrix) и выступлениями (Perfomance)
Plate.belongsTo(Matrix);
Matrix.hasMany(Plate);
Plate.belongsTo(Perfomance);
Perfomance.hasMany(Plate);

// Определение отношений между моделями
Ensemble.belongsTo(Leader, { foreignKey: 'leader_id', as: 'leader' });
Leader.belongsTo(Musician, { foreignKey: 'id', as: 'musician' });

// Запрос для получения данных
Ensemble.findAll({
  include: [{
    model: Leader,
    as: 'leader',
    include: [{
      model: Musician,
      as: 'musician',
      attributes: ['id', 'name', 'instrument']
    }]
  }]
}).then(ensembles => {
  // Обработка результатов запроса
  console.log(ensembles);
}).catch(error => {
  // Обработка ошибок
  console.error('Ошибка:', error);
});

module.exports = {
  Musician,
  Ensemble,
  Perfomance,
  Matrix,
  Plate,
  Company,
  Leader,
};
