import app from "./app";
import { connectDatabase } from "./config/database";
import * as dotenv from "dotenv";
import routes from "./routes";

dotenv.config();

const PORT = process.env.PORT;

connectDatabase();

app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
