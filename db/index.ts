import { dbConnectionString, dbDataCasing } from "~~/drizzle.config";
import { drizzle } from "drizzle-orm/postgres-js";
import * as schema from "./schema";

export const db = drizzle({
   connection: dbConnectionString!,
   schema,
   casing: dbDataCasing,
   // logger: true, 
   
});

// types
export type DbClient = typeof db;
export * from './schema';

