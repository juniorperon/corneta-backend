import { Sequelize } from "sequelize";
import * as dotenv from "dotenv";

dotenv.config();

export const sequelize = new Sequelize(
  process.env.DB_NAME as string,
  process.env.DB_USER as string,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 3306,
    dialect: "mysql", // Define o tipo de banco como MySQL
    logging: false,   // Define para `true` caso queira ver os logs das queries
  }
);

export const connectDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("📚 Conectado ao banco de dados MySQL com sucesso!");
  } catch (error) {
    console.error("❌ Erro ao conectar ao banco de dados:", error);
    process.exit(1); // Encerra o processo se falhar
  }
};
