// Импортируем Sequelize
const { Sequelize, DataTypes } = require('sequelize');



// Определяем модель Музыкантов
const Musician = sequelize.define('Musician', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  instrument: {
    type: DataTypes.STRING
  }
});

// Определяем модель Ансамблей
const Ensemble = sequelize.define('Ensemble', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  type: {
    type: DataTypes.STRING
  }
});

// Определяем модель Произведений
const Composition = sequelize.define('Composition', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  composer: {
    type: DataTypes.STRING
  }
});

// Определяем модель Пластинок
const Record = sequelize.define('Record', {
  stickerNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true
  },
  releaseDate: {
    type: DataTypes.DATE
  },
  wholesalePrice: {
    type: DataTypes.FLOAT
  },
  retailPrice: {
    type: DataTypes.FLOAT
  },
  quantitySoldLastYear: {
    type: DataTypes.INTEGER
  },
  quantitySoldThisYear: {
    type: DataTypes.INTEGER
  },
  remainingStock: {
    type: DataTypes.INTEGER
  }
});

// Определяем модель Компаний
const Company = sequelize.define('Company', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING
  }
});

// Определяем связи между моделями
Musician.belongsTo(Ensemble);
Ensemble.hasMany(Musician);

Composition.belongsToMany(Record, { through: 'CompositionRecord' });
Record.belongsToMany(Composition, { through: 'CompositionRecord' });

Record.belongsTo(Company);
Company.hasMany(Record);

// Экспортируем модели
module.exports = {
  Musician,
  Ensemble,
  Composition,
  Record,
  Company
};
