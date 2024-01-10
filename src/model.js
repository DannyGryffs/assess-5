import { DataTypes, Model } from 'sequelize';
import util from 'util';
import connectToDB from './db.js';

const db = await connectToDB('postgresql:///animals');

export class Human extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }

  getFullName() {
    return this.fname + ' ' + this.lname
  }
}

Human.init(
  {
    humanId: {
      type: DataTypes.INTEGER,
      autoIncriment: true,
      primaryKey: true
    },

    fname: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },

    lname: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },

  }, 
  {
    modelName: 'human',
    sequelize: db,
    timestamps: false
  },
  )

export class Animal extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

Animal.init(
  {
    animalId: {
      type: DataTypes.INTEGER,
      autoIncriment: true,
      primaryKey: true
    },

    name: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    species: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    birthYear: {
      type: DataTypes.INTEGER
    }
  },
   {
    modelName: 'animal',
    sequelize: db,
    timestamps: false
   }
  )

  Human.hasMany(Animal, { foreignKey: 'humanId' });
  Animal.belongsTo(Human, { foreignKey: 'humanId' });
// let h = await Human.findOne() 
// console.log(h.getFullName())
export default db;
