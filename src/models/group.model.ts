import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/database";

// Interface para os atributos do grupo
interface GroupAttributes {
  id: number;
  name: string;
}

// Interface para criação (sem `id`, que será gerado automaticamente)
interface GroupCreationAttributes extends Optional<GroupAttributes, "id"> { }

// Modelo do grupo
class Group extends Model<GroupAttributes, GroupCreationAttributes>
  implements GroupAttributes {
  public id!: number; // Campo obrigatório
  public name!: string; // Campo obrigatório

  // Timestamps automáticos (caso estejam habilitados)
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

// Inicializa o modelo com Sequelize
Group.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true, // Valida que o nome não é vazio
      },
    },
  },
  {
    sequelize, // Instância do Sequelize
    modelName: "Group", // Nome do modelo
    tableName: "group", // Nome da tabela no banco
    timestamps: true, // Adiciona `createdAt` e `updatedAt`
  }
);

export default Group;
