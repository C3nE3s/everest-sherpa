import "reflect-metadata"
import dotenv from 'dotenv';
import { DataSource } from "typeorm"
import { User } from "./entity/User"

/**
 * TODO:
 * local env file is hard coded. change to process env conditional for deploy
 * logging flag is hardcoded to true, change per env
 */
dotenv.config({ path: `.env.local` })
let {
    DB_USERNAME,
    DB_NAME,
    DB_PASS,
} = process.env;

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: DB_USERNAME,
    password: DB_PASS,
    database: DB_NAME,
    synchronize: true,
    logging: true,
    entities: [User],
    migrations: [],
    subscribers: [],
})
