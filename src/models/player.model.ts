import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/database";

interface PlayerAttributes {
  id: number;
  name: string;
  points: number;
  groupId: number;
}

interface PlayerCreationAttributes extends Optional<PlayerAttributes, "id"> { }


export class Player extends Model<PlayerAttributes, PlayerCreationAttributes>
  implements PlayerAttributes {
  public id!: number;
  public name!: string;
  public points!: number;
  public groupId!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Player.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    points: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    groupId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "player",
    timestamps: true,
  }
);

export default Player;
