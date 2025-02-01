import { DataSource } from "typeorm";
import { Product } from "./entity/Product";
import { configDotenv } from "dotenv";
configDotenv();

console.log(process.env.DB_USER);
console.log(process.env.DB_PASSWORD);
const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5433,
  username: "postgres",
  password: process.env.DB_PASSWORD,
  database: "db_nomada",
  synchronize: false,
  logging: true,
  entities:  [Product],
  subscribers: [],
  migrations: ["src/database/migrations/*.ts"],
});

export default AppDataSource;
