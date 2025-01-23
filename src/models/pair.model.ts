import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/database";

interface PairAttributes {
  id: number;
  playerId: number;
  partnerId: number;
  groupId: number;
  edition: string;
}

interface PairCreationAttributes extends Optional<PairAttributes, "id"> { }


export class Pair extends Model<PairAttributes, PairCreationAttributes>
  implements PairAttributes {
  public id!: number;
  public playerId!: number;
  public partnerId!: number;
  public groupId!: number;
  public edition!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Pair.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    playerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    partnerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    groupId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    edition: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "pair",
    timestamps: true,
  }
);

export default Pair;
