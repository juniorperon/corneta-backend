import "reflect-metadata";
import express from 'express';
import cors from 'cors';
import { AppDataSource } from "./database/datasource";
import * as dotenv from "dotenv";
import routers from "./app/routes";

const app = express();

app.use(cors());

app.use(express.json());

app.use(routers);

dotenv.config();

const PORT = process.env.PORT;

AppDataSource.initialize()
  .then(() => {
    console.log("Conexão com o banco de dados estabelecida com sucesso!");

    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Erro ao conectar ao banco de dados", error);
  });
