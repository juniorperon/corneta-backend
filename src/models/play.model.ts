import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/database";

interface PlayAttributes {
  id: number;
  name: string;
  points: number;
  groupId: number;
}

interface PlayCreationAttributes extends Optional<PlayAttributes, "id"> { }


export class Play extends Model<PlayAttributes, PlayCreationAttributes>
  implements PlayAttributes {
  public id!: number;
  public name!: string;
  public points!: number;
  public groupId!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Play.init(
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
    tableName: "play",
    timestamps: true,
  }
);

export default Play;
